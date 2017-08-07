/*
 * Copyright (c) 2014-2016. JarkimZhu
 * This software can not be used privately without permission
 */


/**
 * @version 0.0.1-SNAPSHOT
 * @author JarkimZhu
 * Created on 2015/7/4.
 * @class
 */
export default class AjaxHttpClient {
  constructor(forceSetCookie) {
    this._cookie = null;
    this._forceSetCookie = forceSetCookie;
    this._rewriteUri = false;
  }

  get(url, request, isScriptGet, enableCache) {
    if (!isScriptGet) {
      const cookieUrl = this._setCookie(url, request);
      return new Promise((resolve, reject) => {
        const xhr = this._createCORSRequest(reject);
        xhr.onreadystatechange = () => {
          this._onLoaded(xhr, resolve, reject);
        };
        xhr.timeout = 15000; // 超时时间,毫秒单位

        xhr.open('GET', cookieUrl, true);

        if (request && request.headers) {
          const headers = request.headers;
          for (const key in headers) {
            if (Object.hasOwnProperty.call(headers, key)) {
              xhr.setRequestHeader(key, headers[key]);
            }
          }
        }

        xhr.send();
      });
    } else {
      return this._scriptGet(url, enableCache);
    }
  }

  post(url, request) {
    let body = request.body;
    const headers = request.headers;

    if (body && !headers['Content-Type']) {
      if (typeof body === 'object') {
        headers['Content-Type'] = 'application/json;charset=UTF-8';
        body = JSON.stringify(body);
      } else if (typeof body === 'string') {
        headers['Content-Type'] = 'text/plain;charset=UTF-8';
      }
    }

    const cookieUrl = this._setCookie(url, request);

    return new Promise((resolve, reject) => {
      const xhr = this._createCORSRequest(reject);
      xhr.onreadystatechange = () => {
        this._onLoaded(xhr, resolve, reject);
      };
      xhr.timeout = 15000; // 超时时间,毫秒单位


      xhr.open('POST', cookieUrl, true);

      for (const key in headers) {
        if (Object.hasOwnProperty.call(headers, key)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }

      xhr.send(body);
    });
  }

  upload(url, request, cb, pcb) {
    const body = request.body;
    const headers = request.headers;

    let formData;
    // eslint-disable-next-line
    if (body instanceof FormData) {
      formData = body;
    } else {
      // eslint-disable-next-line
      formData = new FormData();
      for (const key in body) {
        if (Object.hasOwnProperty.call(body, key)) {
          formData.append(key, body[key]);
        }
      }
    }

    const cookieUrl = this._setCookie(url, request);

    const xhr = this._createCORSRequest(cb);
    xhr.onreadystatechange = () => {
      this._onLoaded(xhr, (ret) => {
        if (cb) cb(null, ret);
      }, (err) => {
        if (cb) cb(err);
      });
    };
    xhr.upload.onprogress = function (event) {
      if (event.lengthComputable) {
        const percent = event.loaded / event.total;
        if (pcb) pcb(percent);
      }
    };

    xhr.open('POST', cookieUrl, true);

    for (const key in headers) {
      if (Object.hasOwnProperty.call(headers, key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    xhr.send(formData);
  }

  clearCookie() {
    this._cookie = null;
    this._rewriteUri = false;
  }

  _setCookie(url, request) {
    if (this._cookie && !this._rewriteUri) {
      const headers = request.headers;
      headers.Cookie = this._cookie;
    } else if (this._cookie && this._rewriteUri) {
      const index = url.indexOf('?');
      if (index > -1) {
        const prefix = url.substring(0, index);
        const suffix = url.substring(index);
        return `${prefix};${this._cookie}${suffix}`;
      } else {
        return `${url};${this._cookie}`;
      }
    }
    return url;
  }

  /* eslint-disable */
  _createCORSRequest(cb) {
    let xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
    if ('withCredentials' in xhr) {
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.withCredentials = true;
    } else if (typeof XDomainRequest !== 'undefined') {
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
    }
    xhr.onerror = function (e) {
      if (cb) cb(e);
    };
    xhr.onabort = function (e) {
      if (cb) cb(e);
    };
    xhr.ontimeout = function (e) {
      if (cb) cb(e);
    };
    return xhr;
  }
  /* eslint-enable */

  _onLoaded(xhr, resolve, reject) {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 207) {
        if (this._forceSetCookie) {
          let cookie = xhr.getResponseHeader('Set-Cookie');
          if (cookie) {
            cookie = cookie.substring(0, cookie.indexOf(';'));
            this._cookie = cookie;
          } else {
            cookie = xhr.getResponseHeader('Cx-Session-Id');
            if (cookie) {
              this._cookie = cookie;
              this._rewriteUri = true;
            }
          }
        }
        resolve(new _Response(xhr));
      } else if (xhr.status !== 0) {
        reject(new Error(`status code: ${xhr.status}`));
      }
    }
  }

  /* eslint-disable */
  _scriptGet(url, enableCache) {
    const d = document;
    const s = document.createElement('script');

    return new Promise((resolve, reject) => {
      const _onError = function () {
        s.parentNode.removeChild(s);
        reject(`Load ${url} failed!`);
      };
      const _onLoad = function () {
        s.parentNode.removeChild(s);
        this.removeEventListener('load', _onLoad, false);
        this.removeEventListener('error', _onError, false);
        resolve();
      };
      s.addEventListener('load', _onLoad, false);

      s.addEventListener('error', _onError, false);

      if (enableCache) {
        s.src = `${url}&_t=${new Date().getTime()}`;
      } else {
        s.src = url;
      }

      d.body.appendChild(s);
    });
  }
  /* eslint-enable */
}

class _Response {
  _xhr;

  constructor(xhr) {
    this._xhr = xhr;
  }

  json() {
    return new Promise((resolve, reject) => {
      try {
        const text = this._xhr.responseText;
        const json = JSON.parse(text);
        resolve(json);
      } catch (e) {
        reject(e);
      }
    });
  }
}
