jaxon.config.requestURI = '/audit/jaxon';
jaxon.config.statusMessages = false;
jaxon.config.waitCursor = true;
jaxon.config.version = 'Jaxon 5.x';
jaxon.config.defaultMode = 'asynchronous';
jaxon.config.defaultMethod = 'POST';
jaxon.config.responseType = 'JSON';
jaxon.setCsrf('csrf-token');

jaxon.dom.ready(() => jaxon.processCustomAttrs());

jaxon.dom.ready(() => jaxon.dialog.config({"labels":{"confirm":{"yes":"Yes","no":"No"}},"defaults":{"modal":"bootbox","alert":"sweetalert","confirm":"sweetalert"}}));

const jx = {
  rc: (name, method, parameters, options = {}) => jaxon.request({ type: 'class', name, method }, { parameters, ...options}),
  rf: (name, parameters, options = {}) => jaxon.request({ type: 'func', name }, { parameters, ...options}),
  c0: 'Lagdo.DbAdmin.Ajax.Audit.Commands',
};

Lagdo = {
  DbAdmin: {
    Ajax: {
      Audit: {
        Commands: {
          html: (...args) => jx.rc(jx.c0, 'html', args, { bags: ["dbadmin.audit"] }),
          page: (...args) => jx.rc(jx.c0, 'page', args, { bags: ["dbadmin.audit"] }),
          show: (...args) => jx.rc(jx.c0, 'show', args, { bags: ["dbadmin.audit"] }),
          paginationAttributes: (...args) => jx.rc(jx.c0, 'paginationAttributes', args, { bags: ["dbadmin.audit"] }),
          clear: (...args) => jx.rc(jx.c0, 'clear', args, { bags: ["dbadmin.audit"] }),
          visible: (...args) => jx.rc(jx.c0, 'visible', args, { bags: ["dbadmin.audit"] }),
          render: (...args) => jx.rc(jx.c0, 'render', args, { bags: ["dbadmin.audit"] }),
          item: (...args) => jx.rc(jx.c0, 'item', args, { bags: ["dbadmin.audit"] }),
        },
      },
    },
  },
};

// Spinner javascript code.

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Spin = {}));
})(this, (function (exports) { 'use strict';

    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var defaults = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        scale: 1.0,
        corners: 1,
        color: '#000',
        fadeColor: 'transparent',
        animation: 'spinner-line-fade-default',
        rotate: 0,
        direction: 1,
        speed: 1,
        zIndex: 2e9,
        className: 'spinner',
        top: '50%',
        left: '50%',
        shadow: '0 0 1px transparent', // prevent aliased lines
        position: 'absolute',
    };
    var Spinner = /** @class */ (function () {
        function Spinner(opts) {
            if (opts === void 0) { opts = {}; }
            this.opts = __assign(__assign({}, defaults), opts);
        }
        /**
         * Adds the spinner to the given target element. If this instance is already
         * spinning, it is automatically removed from its previous target by calling
         * stop() internally.
         */
        Spinner.prototype.spin = function (target) {
            this.stop();
            this.el = document.createElement('div');
            this.el.className = this.opts.className;
            this.el.setAttribute('role', 'progressbar');
            this.el.style.position = this.opts.position;
            this.el.style.width = "0";
            this.el.style.zIndex = this.opts.zIndex.toString();
            this.el.style.left = this.opts.left;
            this.el.style.top = this.opts.top;
            this.el.style.transform = "scale(".concat(this.opts.scale, ")");
            if (target) {
                target.insertBefore(this.el, target.firstChild || null);
            }
            drawLines(this.el, this.opts);
            return this;
        };
        /**
         * Stops and removes the Spinner.
         * Stopped spinners may be reused by calling spin() again.
         */
        Spinner.prototype.stop = function () {
            if (this.el) {
                if (this.el.parentNode) {
                    this.el.parentNode.removeChild(this.el);
                }
                this.el = undefined;
            }
            return this;
        };
        return Spinner;
    }());
    /**
     * Returns the line color from the given string or array.
     */
    function getColor(color, idx) {
        return typeof color == 'string' ? color : color[idx % color.length];
    }
    /**
     * Internal method that draws the individual lines.
     */
    function drawLines(el, opts) {
        var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
        var shadow = 'none';
        if (opts.shadow === true) {
            shadow = '0 2px 4px #000'; // default shadow
        }
        else if (typeof opts.shadow === 'string') {
            shadow = opts.shadow;
        }
        var shadows = parseBoxShadow(shadow);
        for (var i = 0; i < opts.lines; i++) {
            var degrees = ~~(360 / opts.lines * i + opts.rotate);
            var backgroundLine = document.createElement('div');
            backgroundLine.style.position = 'absolute';
            backgroundLine.style.top = "".concat(-opts.width / 2, "px");
            backgroundLine.style.width = (opts.length + opts.width) + 'px';
            backgroundLine.style.height = opts.width + 'px';
            backgroundLine.style.background = getColor(opts.fadeColor, i);
            backgroundLine.style.borderRadius = borderRadius;
            backgroundLine.style.transformOrigin = 'left';
            backgroundLine.style.transform = "rotate(".concat(degrees, "deg) translateX(").concat(opts.radius, "px)");
            var delay = i * opts.direction / opts.lines / opts.speed;
            delay -= 1 / opts.speed; // so initial animation state will include trail
            var line = document.createElement('div');
            line.style.width = '100%';
            line.style.height = '100%';
            line.style.background = getColor(opts.color, i);
            line.style.borderRadius = borderRadius;
            line.style.boxShadow = normalizeShadow(shadows, degrees);
            line.style.animation = "".concat(1 / opts.speed, "s linear ").concat(delay, "s infinite ").concat(opts.animation);
            backgroundLine.appendChild(line);
            el.appendChild(backgroundLine);
        }
    }
    function parseBoxShadow(boxShadow) {
        var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
        var shadows = [];
        for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
            var shadow = _a[_i];
            var matches = shadow.match(regex);
            if (matches === null) {
                continue; // invalid syntax
            }
            var x = +matches[2];
            var y = +matches[5];
            var xUnits = matches[4];
            var yUnits = matches[7];
            if (x === 0 && !xUnits) {
                xUnits = yUnits;
            }
            if (y === 0 && !yUnits) {
                yUnits = xUnits;
            }
            if (xUnits !== yUnits) {
                continue; // units must match to use as coordinates
            }
            shadows.push({
                prefix: matches[1] || '', // could have value of 'inset' or undefined
                x: x,
                y: y,
                xUnits: xUnits,
                yUnits: yUnits,
                end: matches[8],
            });
        }
        return shadows;
    }
    /**
     * Modify box-shadow x/y offsets to counteract rotation
     */
    function normalizeShadow(shadows, degrees) {
        var normalized = [];
        for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
            var shadow = shadows_1[_i];
            var xy = convertOffset(shadow.x, shadow.y, degrees);
            normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
        }
        return normalized.join(', ');
    }
    function convertOffset(x, y, degrees) {
        var radians = degrees * Math.PI / 180;
        var sin = Math.sin(radians);
        var cos = Math.cos(radians);
        return [
            Math.round((x * cos + y * sin) * 1000) / 1000,
            Math.round((-x * sin + y * cos) * 1000) / 1000,
        ];
    }

    exports.Spinner = Spinner;
}));

jaxon.dbadmin = {};

(function(self) {
    /**
     * @param {string} checkboxClass
     * @param {string} checkboxId
     *
     * @returns {void}
     */
    const countTableCheckboxes = (checkboxClass, checkboxId) => $(`#${checkboxId}-count`)
        .html($(`.${checkboxClass}` + ':checked').length);

    /**
     * @param {string} checkboxClass
     * @param {string} checkboxId
     * @param {string} wrapperId
     *
     * @returns {void}
     */
    self.selectTableCheckboxes = (checkboxClass, checkboxId, wrapperId) => {
        $(`#${checkboxId}-all`).change(function() {
            $(`.${checkboxClass}`, `#${wrapperId}`).prop('checked', this.checked);
            countTableCheckboxes(checkboxClass, checkboxId);
        });
        $(`.${checkboxClass}`, `#${wrapperId}`).change(function() {
            countTableCheckboxes(checkboxClass, checkboxId);
        });
    };

    /**
     * @param {string} itemNameClass
     * @param {string} itemNameId
     * @param {string} itemDataClass
     * @param {string} itemDataId
     * @param {string} wrapperId
     *
     * @returns {void}
     */
    self.setExportEventHandlers = (itemNameClass, itemNameId, itemDataClass, itemDataId, wrapperId) => {
        $(`#${itemNameId}-all`).change(function() {
            $(`.${itemNameClass}`, `#${wrapperId}`).prop('checked', this.checked);
        });
        $(`#${itemDataId}-all`).change(function() {
            $(`.${itemDataClass}`, `#${wrapperId}`).prop('checked', this.checked);
        });
        // Check or uncheck the data checkbox when the name is changed.
        $(`.${itemNameClass}`, `#${wrapperId}`).change(function() {
            const itemDataPos = $(this).attr('data-pos');
            $(`#${itemDataId}-${itemDataPos}`, `#${wrapperId}`).prop('checked', this.checked);
        });
    };

    /**
     * @param {string} wrapperId
     *
     * @returns {void}
     */
    self.setFileUpload = (wrapperId) => {
        $(`#${wrapperId}`).on('change', ':file', function() {
            const fileInput = $(this);
            const numFiles = fileInput.get(0).files ? fileInput.get(0).files.length : 1;
            const label = fileInput.val().replace(/\\/g, '/').replace(/.*\//, '');
            const textInput = $(`#${wrapperId}`).find(':text');
            const text = numFiles > 1 ? numFiles + ' files selected' : label;
            if (textInput.length > 0) {
                textInput.val(text);
            }
        });
    };

    /**
     * @param {string} url
     * @param {string} filename
     *
     * @returns {void}
     */
    self.downloadFile = (url, filename) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    /**
     * Convert an HTML text to a DOM node. Only the first child is returned.
     *
     * @param {string} htmlText
     *
     * @returns {string}
     */
    const makeHtmlNode = (htmlText) => {
        const node = document.createElement('div');
        node.innerHTML = htmlText;
        // Parse the custom Jaxon attributes in the node.
        // Todo: automate this with the Jaxon library.
        if (node.firstChild !== null) {
            jaxon.parser.attr.process(node.firstChild);
        }
        return node.firstChild;
    };

    /**
     * @param {string} tabNavId 
     *
     * @returns {void}
     */
    self.activateTab = (tabNavId) => document.getElementById(tabNavId)?.click(new Event('click'));

    /**
     * @param {string} tabNavWrapper
     * @param {string} tabNavHtml
     * @param {string} tabContentWrapper
     * @param {string} tabContentHtml
     * @param {string} activeTab 
     *
     * @returns {void}
     */
    self.addTab = (tabNavWrapper, tabNavHtml, tabContentWrapper, tabContentHtml, activeTab) => {
        const tabNav = document.getElementById(tabNavWrapper);
        tabNav.appendChild(makeHtmlNode(tabNavHtml));
        const tabContent = document.getElementById(tabContentWrapper);
        tabContent.appendChild(makeHtmlNode(tabContentHtml));
        // Activate the new tab.
        if (activeTab !== undefined) {
            self.activateTab(activeTab);
        }
    };

    /**
     * @param {string} tabNavId 
     * @param {string} tabContentId 
     * @param {string} activeTab 
     *
     * @returns {void}
     */
    self.delTab = (tabNavId, tabContentId, activeTab) => {
        // The title is the child of a parent element.
        document.getElementById(tabNavId)?.parentElement?.remove();
        document.getElementById(tabContentId)?.remove();
        // Activate another tab, so the screen is not left blank.
        if (activeTab !== undefined) {
            self.activateTab(activeTab);
        }
    };
})(jaxon.dbadmin);

jaxon.dom.ready(() => {
    const spin = {
        spinner: new Spin.Spinner({ position: 'fixed' }),
        count: 0, // To make sure that the spinner is started once.
        cursor: jaxon.config.cursor.update,
    };

    // Replace the default Jaxon defined cursor with our custom spinner.
    jaxon.config.cursor.update = {
        onRequest: function() {
            if(spin.count++ === 0)
            {
                spin.spinner.spin(document.body);
                spin.cursor.onRequest();
            }
        },
        onComplete: function() {
            if(--spin.count === 0)
            {
                spin.spinner.stop();
                spin.cursor.onComplete();
            }
        },
        onFailure: function() {
            if(--spin.count === 0)
            {
                spin.spinner.stop();
                spin.cursor.onFailure && spin.cursor.onFailure();
            }
        },
    };
});

/**
 * Bootbox dialogs plugin
 * Class: jaxon.dialog.libs.bootbox
 */

jaxon.dom.ready(() => jaxon.dialog.register('bootbox', (self, options, utils) => {
    // Dialogs options
    const {
        labels,
        modal: modalOptions = {},
        alert: alertOptions = {},
        confirm: confirmOptions = {},
    } = options;

    /**
     * @var {object}
     */
    const dialog = {
        dom: null,
    };

    /**
     * Show the modal dialog
     *
     * @param {object} dialog The dialog parameters
     * @param {string} dialog.title The dialog title
     * @param {string} dialog.content The dialog HTML content
     * @param {array} dialog.buttons The dialog buttons
     * @param {array} dialog.options The dialog options
     * @param {function} cbDomElement A callback to call with the DOM element of the dialog content
     *
     * @returns {object}
     */
    self.show = ({ title, content, buttons, options }, cbDomElement) => {
        let btnIndex = 1;
        const oButtons = {};
        buttons.forEach(({ title: label, class: className, click }) => {
            if (!utils.isObject(click)) {
                oButtons.cancel = {label, className: 'btn-danger' };
                return;
            }
            oButtons[`btn${btnIndex++}`] = {
                label,
                className,
                callback: () => {
                    utils.js(click);
                    return false; // Do not close the dialog.
                },
            };
        });
        dialog.dom = bootbox.dialog({
            ...modalOptions,
            ...options,
            title,
            message: content !== '' ? content : '&nbsp;',
            buttons: oButtons,
        });
        // Pass the js content element to the callback.
        cbDomElement(dialog.dom.get(0));
    };

    /**
     * Hide the modal dialog
     *
     * @returns {void}
     */
    self.hide = () => {
        if ((dialog.dom)) {
            dialog.dom.modal('hide');
            dialog.dom = null;
        }
    };

    const xTypes = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'danger',
    };

    /**
     * Show an alert message
     *
     * @param {object} alert The alert parameters
     * @param {string} alert.type The alert type
     * @param {string} alert.message The alert message
     * @param {string} alert.title The alert title
     *
     * @returns {void}
     */
    self.alert = ({ type, message, title }) => {
        message = '<div class="alert alert-' + (xTypes[type] ?? xTypes.info) +
            '" style="margin-top:15px;margin-bottom:-15px;">' +
            (!message ? '' : '<strong>' + title + '</strong><br/>') + message + '</div>';
        bootbox.alert({ ...alertOptions, message });
    };

    /**
     * Ask a confirm question to the user.
     *
     * @param {object} confirm The confirm parameters
     * @param {string} confirm.question The question to ask
     * @param {string} confirm.title The question title
     * @param {object} callback The confirm callbacks
     * @param {callback} callback.yes The function to call if the answer is yes
     * @param {callback=} callback.no The function to call if the answer is no
     *
     * @returns {void}
     */
    self.confirm = ({ question, title }, { yes: yesCb, no: noCb = () => {} }) => bootbox.confirm({
        ...confirmOptions,
        title: title,
        message: question,
        buttons: {
            cancel: {label: labels.no},
            confirm: {label: labels.yes}
        },
        callback: (res) => {
            res ? yesCb() : noCb();
        },
    });
}));

/**
 * Class: jaxon.dialog.libs.sweetalert
 */

jaxon.dom.ready(() => jaxon.dialog.register('sweetalert', (self, options) => {
    // Dialogs options
    const {
        labels,
        alert: alertOptions = {},
        confirm: confirmOptions = {},
    } = options;

    const xTypes = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'error',
    };

    /**
     * Show an alert message
     *
     * @param {object} alert The alert parameters
     * @param {string} alert.type The alert type
     * @param {string} alert.message The alert message
     * @param {string} alert.title The alert title
     *
     * @returns {void}
     */
    self.alert = ({ type, message, title }) => Swal.fire({
        ...alertOptions,
        text: message,
        title: title ?? '',
        icon: xTypes[type] ?? xTypes.info,
    });

    /**
     * Ask a confirm question to the user.
     *
     * @param {object} confirm The confirm parameters
     * @param {string} confirm.question The question to ask
     * @param {string} confirm.title The question title
     * @param {object} callback The confirm callbacks
     * @param {callback} callback.yes The function to call if the answer is yes
     * @param {callback=} callback.no The function to call if the answer is no
     *
     * @returns {void}
     */
    self.confirm = ({ question, title }, { yes: yesCb, no: noCb = () => {} }) => Swal.fire({
        ...confirmOptions,
        icon: "question",
        title,
        text: question,
        showCancelButton: true,
        confirmButtonText: labels.yes,
        cancelButtonText: labels.no,
        reverseButtons: true,
    }).then((result) => {
        result.isConfirmed ? yesCb() : noCb();
    });
}));

/**
 * Class: jaxon.dialog.libs.butterup
 */

jaxon.dom.ready(() => jaxon.dialog.register('butterup', (self, options, utils) => {
    // Dialogs options
    const {
        labels,
        alert: alertOptions = {},
        confirm: confirmOptions = {},
    } = options;

    const xTypes = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'error',
    };

    /**
     * Show an alert message
     *
     * @param {object} alert The alert parameters
     * @param {string} alert.type The alert type
     * @param {string} alert.title The alert title
     * @param {string} alert.message The alert message
     *
     * @returns {void}
     */
    self.alert = ({ type, title, message }) => {
        butterup.toast({
            type: xTypes[type] ?? xTypes.info,
            title,
            message,
            location: 'top-center',
            icon: true,
            dismissable: true,
            ...alertOptions,
            onRender: (toast) => {
                // Give a custom id to the toast.
                toast.id = 'butterupToast-' + utils.createUniqueId(10);
            },
        });
    };

    /**
     * Ask a confirm question to the user.
     *
     * @param {object} confirm The confirm parameters
     * @param {string} confirm.question The question to ask
     * @param {string} confirm.title The question title
     * @param {object} callback The confirm callbacks
     * @param {callback} callback.yes The function to call if the answer is yes
     * @param {callback=} callback.no The function to call if the answer is no
     *
     * @returns {void}
     */
    self.confirm = ({ question, title }, { yes: yesCb, no: noCb = () => {} }) => {
        const toastOptions = {
            id: '', // The id of the confirm toast.
            life: butterup.options.toastLife, // Save the toastLife value.
        };
        // Set the toast life to a higher value, so the confirm dialog is not dismissed too early.
        // Todo: disable the dismissable timeout.
        butterup.options.toastLife = 60000;

        butterup.toast({
            title,
            message: question,
            location: 'top-center',
            icon: false,
            dismissable: false,
            ...confirmOptions,
            onRender: (toast) => {
                // Give a custom id to the toast.
                toast.id = 'butterupToast-' + utils.createUniqueId(10);
                // Save the id of the confirm toast.
                toastOptions.id = toast.id;
            },
            primaryButton: {
                text: labels.yes,
                onClick: () => {
                    // Close the confirm toast.
                    butterup.despawnToast(toastOptions.id);
                    yesCb();
                },
            },
            secondaryButton: {
                text: labels.no,
                onClick: () => {
                    // Close the confirm toast.
                    butterup.despawnToast(toastOptions.id);
                    noCb();
                },
            },
        });

        // Restore the initial toastLife value.
        butterup.options.toastLife = toastOptions.life;
    };
}));