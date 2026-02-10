jaxon.config.requestURI = '/jaxon';
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
  c0: 'Lagdo.DbAdmin.Ajax.Admin.Admin',
  c1: 'Lagdo.DbAdmin.Ajax.Admin.Db.Command.Query.FavoriteFunc',
  c2: 'Lagdo.DbAdmin.Ajax.Admin.Db.Command.Query.FavoritePage',
  c3: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Database',
  c4: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.EditorFunc',
  c5: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Events',
  c6: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Export',
  c7: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Import',
  c8: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Query',
  c9: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Routines',
  c10: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Sequences',
  c11: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Tables',
  c12: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.UserTypes',
  c13: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Views',
  c14: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Databases',
  c15: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.EditorFunc',
  c16: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Export',
  c17: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Import',
  c18: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Privilege',
  c19: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Privileges',
  c20: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Processes',
  c21: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Query',
  c22: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Status',
  c23: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Variables',
  c24: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Alter',
  c25: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.CreateFunc',
  c26: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.DeleteFunc',
  c27: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.MoveFunc',
  c28: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.UpdateFunc',
  c29: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Create',
  c30: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.QueryFunc',
  c31: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Table',
  c32: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.TableFunc',
  c33: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Delete',
  c34: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Insert',
  c35: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Update',
  c36: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Columns',
  c37: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Filters',
  c38: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Columns',
  c39: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Filters',
  c40: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Sorting',
  c41: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Sorting',
  c42: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Values',
  c43: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.ResultSet',
  c44: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Select',
  c45: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.Form',
  c46: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.View',
  c47: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.ViewFunc',
  c48: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Dql.Select',
  c49: 'Lagdo.DbAdmin.Ajax.Admin.TabFunc',
};

Lagdo = {
  DbAdmin: {
    Ajax: {
      Admin: {
        Admin: {
          server: (...args) => jx.rc(jx.c0, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
        },
        Db: {
          Command: {
            Query: {
              FavoriteFunc: {
                add: (...args) => jx.rc(jx.c1, 'add', args, { bags: ["dbadmin"] }),
                create: (...args) => jx.rc(jx.c1, 'create', args, { bags: ["dbadmin"] }),
                edit: (...args) => jx.rc(jx.c1, 'edit', args, { bags: ["dbadmin"] }),
                update: (...args) => jx.rc(jx.c1, 'update', args, { bags: ["dbadmin"] }),
                delete: (...args) => jx.rc(jx.c1, 'delete', args, { bags: ["dbadmin"] }),
              },
              FavoritePage: {
                html: (...args) => jx.rc(jx.c2, 'html', args, { bags: ["dbadmin"] }),
                page: (...args) => jx.rc(jx.c2, 'page', args, { bags: ["dbadmin"] }),
                paginationAttributes: (...args) => jx.rc(jx.c2, 'paginationAttributes', args, { bags: ["dbadmin"] }),
                clear: (...args) => jx.rc(jx.c2, 'clear', args, { bags: ["dbadmin"] }),
                visible: (...args) => jx.rc(jx.c2, 'visible', args, { bags: ["dbadmin"] }),
                render: (...args) => jx.rc(jx.c2, 'render', args, { bags: ["dbadmin"] }),
                item: (...args) => jx.rc(jx.c2, 'item', args, { bags: ["dbadmin"] }),
              },
            },
          },
          Database: {
            Database: {
              select: (...args) => jx.rc(jx.c3, 'select', args, { bags: ["dbadmin"] }),
              add: (...args) => jx.rc(jx.c3, 'add', args, { bags: ["dbadmin"] }),
              create: (...args) => jx.rc(jx.c3, 'create', args, { bags: ["dbadmin"] }),
              drop: (...args) => jx.rc(jx.c3, 'drop', args, { bags: ["dbadmin"] }),
            },
            EditorFunc: {
              addTab: (...args) => jx.rc(jx.c4, 'addTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              cloneTab: (...args) => jx.rc(jx.c4, 'cloneTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              delTab: (...args) => jx.rc(jx.c4, 'delTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Events: {
              show: (...args) => jx.rc(jx.c5, 'show', args, { bags: ["dbadmin"] }),
            },
            Export: {
              database: (...args) => jx.rc(jx.c6, 'database', args, { bags: ["dbadmin"] }),
              export: (...args) => jx.rc(jx.c6, 'export', args, { bags: ["dbadmin"] }),
            },
            Import: {
              database: (...args) => jx.rc(jx.c7, 'database', args, { bags: ["dbadmin"] }),
              executeWebFile: (...args) => jx.rc(jx.c7, 'executeWebFile', args, { bags: ["dbadmin"] }),
              executeSqlFiles: (...args) => jx.rc(jx.c7, 'executeSqlFiles', args, { bags: ["dbadmin"], upload: 'dbadmin-import-sql-files-input' }),
            },
            Query: {
              database: (...args) => jx.rc(jx.c8, 'database', args, { bags: ["dbadmin","dbadmin.tab"] }),
              exec: (...args) => jx.rc(jx.c8, 'exec', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Routines: {
              show: (...args) => jx.rc(jx.c9, 'show', args, { bags: ["dbadmin"] }),
            },
            Sequences: {
              show: (...args) => jx.rc(jx.c10, 'show', args, { bags: ["dbadmin"] }),
            },
            Tables: {
              show: (...args) => jx.rc(jx.c11, 'show', args, { bags: ["dbadmin"] }),
            },
            UserTypes: {
              show: (...args) => jx.rc(jx.c12, 'show', args, { bags: ["dbadmin"] }),
            },
            Views: {
              show: (...args) => jx.rc(jx.c13, 'show', args, { bags: ["dbadmin"] }),
            },
          },
          Server: {
            Databases: {
              show: (...args) => jx.rc(jx.c14, 'show', args, { bags: ["dbadmin"] }),
            },
            EditorFunc: {
              addTab: (...args) => jx.rc(jx.c15, 'addTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              cloneTab: (...args) => jx.rc(jx.c15, 'cloneTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              delTab: (...args) => jx.rc(jx.c15, 'delTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Export: {
              server: (...args) => jx.rc(jx.c16, 'server', args, { bags: ["dbadmin"] }),
              export: (...args) => jx.rc(jx.c16, 'export', args, { bags: ["dbadmin"] }),
            },
            Import: {
              server: (...args) => jx.rc(jx.c17, 'server', args, { bags: ["dbadmin"] }),
              executeWebFile: (...args) => jx.rc(jx.c17, 'executeWebFile', args, { bags: ["dbadmin"] }),
              executeSqlFiles: (...args) => jx.rc(jx.c17, 'executeSqlFiles', args, { bags: ["dbadmin"], upload: 'dbadmin-import-sql-files-input' }),
            },
            Privilege: {
              add: (...args) => jx.rc(jx.c18, 'add', args, { bags: ["dbadmin"] }),
              create: (...args) => jx.rc(jx.c18, 'create', args, { bags: ["dbadmin"] }),
              edit: (...args) => jx.rc(jx.c18, 'edit', args, { bags: ["dbadmin"] }),
              update: (...args) => jx.rc(jx.c18, 'update', args, { bags: ["dbadmin"] }),
            },
            Privileges: {
              show: (...args) => jx.rc(jx.c19, 'show', args, { bags: ["dbadmin"] }),
            },
            Processes: {
              show: (...args) => jx.rc(jx.c20, 'show', args, { bags: ["dbadmin"] }),
            },
            Query: {
              server: (...args) => jx.rc(jx.c21, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
              exec: (...args) => jx.rc(jx.c21, 'exec', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Status: {
              show: (...args) => jx.rc(jx.c22, 'show', args, { bags: ["dbadmin"] }),
            },
            Variables: {
              show: (...args) => jx.rc(jx.c23, 'show', args, { bags: ["dbadmin"] }),
            },
          },
          Table: {
            Ddl: {
              Alter: {
                render: (...args) => jx.rc(jx.c24, 'render', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              Column: {
                CreateFunc: {
                  add: (...args) => jx.rc(jx.c25, 'add', args, { bags: ["dbadmin","dbadmin.table"] }),
                  save: (...args) => jx.rc(jx.c25, 'save', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
                DeleteFunc: {
                  exec: (...args) => jx.rc(jx.c26, 'exec', args, { bags: ["dbadmin","dbadmin.table"] }),
                  cancel: (...args) => jx.rc(jx.c26, 'cancel', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
                MoveFunc: {
                  up: (...args) => jx.rc(jx.c27, 'up', args, { bags: ["dbadmin","dbadmin.table"] }),
                  down: (...args) => jx.rc(jx.c27, 'down', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
                UpdateFunc: {
                  edit: (...args) => jx.rc(jx.c28, 'edit', args, { bags: ["dbadmin","dbadmin.table"] }),
                  save: (...args) => jx.rc(jx.c28, 'save', args, { bags: ["dbadmin","dbadmin.table"] }),
                  cancel: (...args) => jx.rc(jx.c28, 'cancel', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
              },
              Create: {
                render: (...args) => jx.rc(jx.c29, 'render', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              QueryFunc: {
                changes: (...args) => jx.rc(jx.c30, 'changes', args, { bags: ["dbadmin","dbadmin.table"] }),
                createTable: (...args) => jx.rc(jx.c30, 'createTable', args, { bags: ["dbadmin","dbadmin.table"] }),
                alterTable: (...args) => jx.rc(jx.c30, 'alterTable', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              Table: {
                show: (...args) => jx.rc(jx.c31, 'show', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              TableFunc: {
                create: (...args) => jx.rc(jx.c32, 'create', args, { bags: ["dbadmin","dbadmin.table"] }),
                alter: (...args) => jx.rc(jx.c32, 'alter', args, { bags: ["dbadmin","dbadmin.table"] }),
                drop: (...args) => jx.rc(jx.c32, 'drop', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
            },
            Dml: {
              Delete: {
                exec: (...args) => jx.rc(jx.c33, 'exec', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c33, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
              Insert: {
                show: (...args) => jx.rc(jx.c34, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                save: (...args) => jx.rc(jx.c34, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryForm: (...args) => jx.rc(jx.c34, 'showQueryForm', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c34, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
              Update: {
                edit: (...args) => jx.rc(jx.c35, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                save: (...args) => jx.rc(jx.c35, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryForm: (...args) => jx.rc(jx.c35, 'showQueryForm', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c35, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
            },
            Dql: {
              Options: {
                Fields: {
                  Columns: {
                    edit: (...args) => jx.rc(jx.c36, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c36, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  },
                  Filters: {
                    edit: (...args) => jx.rc(jx.c37, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c37, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  },
                  Form: {
                    Columns: {
                      show: (...args) => jx.rc(jx.c38, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c38, 'add', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c38, 'del', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    },
                    Filters: {
                      show: (...args) => jx.rc(jx.c39, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c39, 'add', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c39, 'del', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    },
                    Sorting: {
                      show: (...args) => jx.rc(jx.c40, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c40, 'add', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c40, 'del', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    },
                  },
                  Sorting: {
                    edit: (...args) => jx.rc(jx.c41, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c41, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  },
                },
                Values: {
                  saveSelectLimit: (...args) => jx.rc(jx.c42, 'saveSelectLimit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  saveSelectTotal: (...args) => jx.rc(jx.c42, 'saveSelectTotal', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  saveTextLength: (...args) => jx.rc(jx.c42, 'saveTextLength', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                },
              },
              ResultSet: {
                html: (...args) => jx.rc(jx.c43, 'html', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                page: (...args) => jx.rc(jx.c43, 'page', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                paginationAttributes: (...args) => jx.rc(jx.c43, 'paginationAttributes', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                clear: (...args) => jx.rc(jx.c43, 'clear', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                visible: (...args) => jx.rc(jx.c43, 'visible', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                render: (...args) => jx.rc(jx.c43, 'render', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                item: (...args) => jx.rc(jx.c43, 'item', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
              Select: {
                show: (...args) => jx.rc(jx.c44, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                edit: (...args) => jx.rc(jx.c44, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select","dbadmin.tab"] }),
              },
            },
          },
          View: {
            Ddl: {
              Form: {
                add: (...args) => jx.rc(jx.c45, 'add', args, { bags: ["dbadmin"] }),
                edit: (...args) => jx.rc(jx.c45, 'edit', args, { bags: ["dbadmin"] }),
              },
              View: {
                show: (...args) => jx.rc(jx.c46, 'show', args, { bags: ["dbadmin"] }),
              },
              ViewFunc: {
                create: (...args) => jx.rc(jx.c47, 'create', args, { bags: ["dbadmin"] }),
                update: (...args) => jx.rc(jx.c47, 'update', args, { bags: ["dbadmin"] }),
                drop: (...args) => jx.rc(jx.c47, 'drop', args, { bags: ["dbadmin"] }),
              },
            },
            Dql: {
              Select: {
                show: (...args) => jx.rc(jx.c48, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                edit: (...args) => jx.rc(jx.c48, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
            },
          },
        },
        TabFunc: {
          add: (...args) => jx.rc(jx.c49, 'add', args, { bags: ["dbadmin","dbadmin.tab"] }),
          del: (...args) => jx.rc(jx.c49, 'del', args, { bags: ["dbadmin","dbadmin.tab"] }),
          editTitle: (...args) => jx.rc(jx.c49, 'editTitle', args, { bags: ["dbadmin","dbadmin.tab"] }),
          saveTitle: (...args) => jx.rc(jx.c49, 'saveTitle', args, { bags: ["dbadmin","dbadmin.tab"] }),
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

(function(self) {
    const editor = {
        select: null,
        query: null,
        tabs: {},
        page: '',
        fontSize: '13px',
        modes: {
            sql: 'ace/mode/sql',
            mysql: 'ace/mode/mysql',
            pgsql: 'ace/mode/pgsql',
        },
        theme: 'ace/theme/textmate',
    };

    /**
     * @returns {string}
     */
    self.getQueryText = () => {
        // Try to get the selected text first.
        const selectedText = editor.query?.getSelectedText();
        return selectedText ? selectedText : editor.query?.getValue() ?? '';
    };

    /**
     * Set the SQL query value and reset the undo history.
     *
     * @param {string} query
     *
     * @returns {void}
     */
    self.setQueryText = (query) => editor.query?.session.setValue(query);

    /**
     * @param {string} appTabId
     *
     * @returns {void}
     */
    self.onAppTabClick = (appTabId) => jaxon.bag.setEntry('dbadmin', 'tab.app', appTabId);

    /**
     * @param {string} appTabId
     * @param {string} editorTabId
     * @param {object} newEditor
     *
     * @returns {bool}
     */
    const addTabEditor = (appTabId, editorTabId, newEditor) => {
        const appEditors = editor.tabs[appTabId] ?? {};
        editor.tabs[appTabId] = {
            ...appEditors,
            [editorTabId]: newEditor,
        };
    };

    /**
     * @param {string} appTabId
     * @param {string} editorTabId
     *
     * @returns {bool}
     */
    const hasTabEditor = (appTabId, editorTabId) => !editor.tabs[appTabId] ?
        false : editor.tabs[appTabId][editorTabId] !== undefined;

    /**
     * @param {string} appTabId
     * @param {string} editorTabId
     *
     * @returns {object|null}
     */
    const getTabEditor = (appTabId, editorTabId) => !editor.tabs[appTabId] ?
        null : editor.tabs[appTabId][editorTabId] ?? null;

    /**
     * @param {string} appTabId
     * @param {string} editorTabId
     *
     * @returns {mixed}
     */
    const delTabEditor = (appTabId, editorTabId) => {
        delete editor.tabs[appTabId][editorTabId];
        editor.tabs[appTabId][editorTabId] = undefined;
    };

    /**
     * @param {string} appTabId
     *
     * @returns {mixed}
     */
    self.delAppEditors = (appTabId) => {
        const appEditors = editor.tabs[appTabId] ?? null;
        if (appEditors !== null) {
            Object.keys(appEditors).forEach(editorTabId => delTabEditor(appTabId, editorTabId));
            delete editor.tabs[appTabId];
            editor.tabs[appTabId] = undefined;
        }
    };

    /**
     * @param {string} appTabId
     * @param {string} editorTabId
     *
     * @returns {void}
     */
    self.onEditorTabClick = (appTabId, editorTabId) => {
        editor.query = getTabEditor(appTabId, editorTabId);
        // When the editor content is changed when it is in a hidden tab, the visible content
        // is not updated when the tab becomes visible. We need to force the refresh.
        editor.query?.session.setValue(self.getQueryText());
        // Save the current editor tab name.
        jaxon.bag.setEntry('dbadmin', 'tab.editor', editorTabId);
    };

    /**
     * @param {string} containerId
     * @param {string} driver
     *
     * @returns {void}
     */
    const createQueryEditor = function(containerId, driver) {
        editor.query = ace.edit(containerId, {
            mode: editor.modes[driver] ?? editor.modes.sql,
            selectionStyle: "text",
            dragEnabled: false,
            useWorker: false,
            enableBasicAutocompletion: true,
            enableSnippets: false,
            enableLiveAutocompletion: true,
            showPrintMargin: false,
        });
        editor.query.setTheme(editor.theme);
        editor.query.session.setUseWrapMode(true);
        document.getElementById(containerId).style.fontSize = editor.fontSize;
    };

    /**
     * @param {string} containerId
     * @param {string} driver
     * @param {string} appTabId
     * @param {string} editorTabId
     *
     * @returns {void}
     */
    self.createQueryEditor = function(containerId, driver, appTabId, editorTabId) {
        createQueryEditor(containerId, driver);
        if (!editorTabId || !appTabId) {
            return;
        }

        const prevEditor = getTabEditor(appTabId, editorTabId);
        if (prevEditor !== null) {
            // Copy the query text of the previous editor instance in the tab.
            editor.query.session.setValue(prevEditor.getValue());
            delTabEditor(appTabId, editorTabId);
        }

        // Save the current editor tab name.
        jaxon.bag.setEntry('dbadmin', 'tab.editor', editorTabId);
        // Save the tab editor.
        addTabEditor(appTabId, editorTabId, editor.query);
    };

    /**
     * @param {string} appTabId
     * @param {string} editorTabId
     *
     * @returns {void}
     */
    self.deleteQueryEditor = (appTabId, editorTabId) => {
        // Delete the deleted tab editor instance
        if (hasTabEditor(appTabId, editorTabId)) {
            delTabEditor(appTabId, editorTabId);
        }
    };

    /**
     * @param {string} appTabId
     * @param {string} sourceTabId
     *
     * @returns {void}
     */
    self.copyQueryText = (appTabId, sourceTabId) => {
        const sourceEditor = getTabEditor(appTabId, sourceTabId);
        if (sourceEditor !== null) {
            // Copy the query text from the source editor.
            editor.query.session.setValue(sourceEditor.getValue());
        }
    };

    /**
     * @param {string} containerId
     * @param {string} driver
     *
     * @returns {void}
     */
    self.createSelectEditor = (containerId, driver) => {
        editor.select = ace.edit(containerId, {
            mode: editor.modes[driver] ?? editor.modes.sql,
            selectionStyle: "text",
            dragEnabled: false,
            useWorker: false,
            showPrintMargin: false,
            showLineNumbers: false,
            showGutter: false, // Also hide the line number "column".
            readOnly: true,
        });
        editor.select.setTheme(editor.theme);
        editor.select.session.setUseWrapMode(true);
        editor.select.resize();
        document.getElementById(containerId).style.fontSize = editor.fontSize;
    };

    /**
     * Read the data-query-id attribute in the parent with the given tag name
     *
     * @param {Element} node
     * @param {string} tag
     *
     * @returns {string}
     */
    const getQueryId = (node, tag) => {
        while ((parent = node?.parent())) {
            if (parent.prop('tagName')?.toLowerCase() === tag) {
                return parent.attr('data-query-id') ?? '';
            }
            node = parent;
        }
        return '';
    };

    /**
     * @param {Element} node
     * @param {string} prefix
     *
     * @returns {string}
     */
    const getHistoryQuery = (node, prefix) => $(`#${prefix}` + getQueryId(node, 'td')).text();

    /**
     * @param {Element} node
     * @param {string} prefix
     *
     * @returns {string}
     */
    const getFavoriteQuery = (node, prefix) => $(`#${prefix}` + getQueryId(node, 'td')).text();

    /**
     * @var {object}
     */
    const toast = {
        lib: '',
        messages: {
            copied: 'Copied!',
            inserted: 'Inserted!',
        },
    };

    /**
     * @param {string}
     *
     * @returns {void}
     */
    self.setToastLib = (lib) => toast.lib = lib;

    /**
     * @param {string}
     *
     * @returns {void}
     */
    const showInfoMessage = (message) => {
        if (toast.lib !== '') {
            jaxon.dialog.alert(toast.lib, { type: 'info', text: message });
        }
    };

    self.history =  {
        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        copyQueryText: (node, prefix) => {
            self.setQueryText(getHistoryQuery(node, prefix));
            showInfoMessage(toast.messages.copied);
        },

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        insertQuerytext: (node, prefix) => {
            editor.query.insert(getHistoryQuery(node, prefix));
            showInfoMessage(toast.messages.inserted);
        },
    };

    self.favorite = {
        /**
         * @param {Element} node
         *
         * @returns {string}
         */
        getQueryId: (node) => getQueryId(node, 'td'),

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {string}
         */
        getQueryText: (node, prefix) => getFavoriteQuery(node, prefix),

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        copyQueryText: (node, prefix) => {
            self.setQueryText(getFavoriteQuery(node, prefix));
            showInfoMessage(toast.messages.copied);
        },

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        insertQuerytext: (node, prefix) => {
            editor.query.insert(getFavoriteQuery(node, prefix));
            showInfoMessage(toast.messages.inserted);
        },
    };
})(jaxon.dbadmin);

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
 * Class: jaxon.dialog.libs.notyf
 */

jaxon.dom.ready(() => jaxon.dialog.register('notyf', (self, options) => {
    // Dialogs options
    const {
        alert: alertOptions = {},
    } = options;

    const xTypes = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'error',
    };

    /*
     * Todo: Define a custom icon for the warning and info messages,
     * and re-enable the default one on the success and error messages.
     */
    const notyf = new Notyf({
        duration: 5000,
        ripple: false,
        dismissible: true,
        position: { x: 'center', y: 'top' },
        types: [{
            type: 'success',
            className: 'notyf__toast--success',
            backgroundColor: '#3dc763',
            icon: false,
            // icon: {
            //     className: 'notyf__icon--success',
            //     tagName: 'i',
            // },
        }, {
            type: 'error',
            className: 'notyf__toast--error',
            backgroundColor: '#ed3d3d',
            icon: false,
            // icon: {
            //     className: 'notyf__icon--error',
            //     tagName: 'i',
            // },
        },{
            type: 'warning',
            background: '#FEBE10',
            icon: false,
            // icon: {
            //     className: 'material-icons',
            //     tagName: 'i',
            //     color: 'white',
            //     text: 'i',
            // },
        }, {
            type: 'info',
            background: '#318CE7',
            icon: false,
        }],
        ...alertOptions,
    });

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
        notyf.open({ type: xTypes[type] ?? xTypes.info, message });
    };
}));