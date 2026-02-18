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
  c1: 'Lagdo.DbAdmin.Ajax.Admin.Db.Command.Query.Favorite',
  c2: 'Lagdo.DbAdmin.Ajax.Admin.Db.Command.Query.FavoriteFunc',
  c3: 'Lagdo.DbAdmin.Ajax.Admin.Db.Command.Query.FavoritePage',
  c4: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Database',
  c5: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.EditorFunc',
  c6: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Events',
  c7: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Export',
  c8: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Import',
  c9: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Query',
  c10: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Routines',
  c11: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Sequences',
  c12: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Tables',
  c13: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.UserTypes',
  c14: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Views',
  c15: 'Lagdo.DbAdmin.Ajax.Admin.Db.FuncComponent',
  c16: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Databases',
  c17: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.EditorFunc',
  c18: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Export',
  c19: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Import',
  c20: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Privilege',
  c21: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Privileges',
  c22: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Processes',
  c23: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Query',
  c24: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Server',
  c25: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Status',
  c26: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Variables',
  c27: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Alter',
  c28: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.CreateFunc',
  c29: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.DeleteFunc',
  c30: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.MoveFunc',
  c31: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.UpdateFunc',
  c32: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Create',
  c33: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.QueryFunc',
  c34: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Table',
  c35: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.TableFunc',
  c36: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Delete',
  c37: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Insert',
  c38: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Update',
  c39: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields',
  c40: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Columns',
  c41: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Filters',
  c42: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Columns',
  c43: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Filters',
  c44: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Sorting',
  c45: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Sorting',
  c46: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Values',
  c47: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.ResultSet',
  c48: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Select',
  c49: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.Form',
  c50: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.View',
  c51: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.ViewFunc',
  c52: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Dql.Select',
  c53: 'Lagdo.DbAdmin.Ajax.Admin.Menu.Database.Command',
  c54: 'Lagdo.DbAdmin.Ajax.Admin.Menu.Database.Schemas',
  c55: 'Lagdo.DbAdmin.Ajax.Admin.Menu.Sections',
  c56: 'Lagdo.DbAdmin.Ajax.Admin.Menu.Server.Command',
  c57: 'Lagdo.DbAdmin.Ajax.Admin.Menu.Server.Databases',
  c58: 'Lagdo.DbAdmin.Ajax.Admin.Page.DbConnection',
  c59: 'Lagdo.DbAdmin.Ajax.Admin.TabFunc',
};

Lagdo = {
  DbAdmin: {
    Ajax: {
      Admin: {
        Admin: {
          server: (...args) => jx.rc(jx.c0, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
          start: (...args) => jx.rc(jx.c0, 'start', args, { bags: ["dbadmin","dbadmin.tab"] }),
          tabs: (...args) => jx.rc(jx.c0, 'tabs', args, { bags: ["dbadmin","dbadmin.tab"] }),
          set: (...args) => jx.rc(jx.c0, 'set', args, { bags: ["dbadmin","dbadmin.tab"] }),
          has: (...args) => jx.rc(jx.c0, 'has', args, { bags: ["dbadmin","dbadmin.tab"] }),
          get: (...args) => jx.rc(jx.c0, 'get', args, { bags: ["dbadmin","dbadmin.tab"] }),
        },
        Db: {
          Command: {
            Query: {
              Favorite: {
                set: (...args) => jx.rc(jx.c1, 'set', args, { bags: ["dbadmin"] }),
                has: (...args) => jx.rc(jx.c1, 'has', args, { bags: ["dbadmin"] }),
                get: (...args) => jx.rc(jx.c1, 'get', args, { bags: ["dbadmin"] }),
              },
              FavoriteFunc: {
                add: (...args) => jx.rc(jx.c2, 'add', args, { bags: ["dbadmin"] }),
                create: (...args) => jx.rc(jx.c2, 'create', args, { bags: ["dbadmin"] }),
                edit: (...args) => jx.rc(jx.c2, 'edit', args, { bags: ["dbadmin"] }),
                update: (...args) => jx.rc(jx.c2, 'update', args, { bags: ["dbadmin"] }),
                delete: (...args) => jx.rc(jx.c2, 'delete', args, { bags: ["dbadmin"] }),
                set: (...args) => jx.rc(jx.c2, 'set', args, { bags: ["dbadmin"] }),
                has: (...args) => jx.rc(jx.c2, 'has', args, { bags: ["dbadmin"] }),
                get: (...args) => jx.rc(jx.c2, 'get', args, { bags: ["dbadmin"] }),
              },
              FavoritePage: {
                html: (...args) => jx.rc(jx.c3, 'html', args, { bags: ["dbadmin"] }),
                page: (...args) => jx.rc(jx.c3, 'page', args, { bags: ["dbadmin"] }),
                paginationAttributes: (...args) => jx.rc(jx.c3, 'paginationAttributes', args, { bags: ["dbadmin"] }),
                clear: (...args) => jx.rc(jx.c3, 'clear', args, { bags: ["dbadmin"] }),
                visible: (...args) => jx.rc(jx.c3, 'visible', args, { bags: ["dbadmin"] }),
                render: (...args) => jx.rc(jx.c3, 'render', args, { bags: ["dbadmin"] }),
                item: (...args) => jx.rc(jx.c3, 'item', args, { bags: ["dbadmin"] }),
                set: (...args) => jx.rc(jx.c3, 'set', args, { bags: ["dbadmin"] }),
                has: (...args) => jx.rc(jx.c3, 'has', args, { bags: ["dbadmin"] }),
                get: (...args) => jx.rc(jx.c3, 'get', args, { bags: ["dbadmin"] }),
              },
            },
          },
          Database: {
            Database: {
              select: (...args) => jx.rc(jx.c4, 'select', args, { bags: ["dbadmin"] }),
              add: (...args) => jx.rc(jx.c4, 'add', args, { bags: ["dbadmin"] }),
              create: (...args) => jx.rc(jx.c4, 'create', args, { bags: ["dbadmin"] }),
              drop: (...args) => jx.rc(jx.c4, 'drop', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c4, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c4, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c4, 'get', args, { bags: ["dbadmin"] }),
            },
            EditorFunc: {
              set: (...args) => jx.rc(jx.c5, 'set', args, { bags: ["dbadmin","dbadmin.tab"] }),
              has: (...args) => jx.rc(jx.c5, 'has', args, { bags: ["dbadmin","dbadmin.tab"] }),
              get: (...args) => jx.rc(jx.c5, 'get', args, { bags: ["dbadmin","dbadmin.tab"] }),
              addTab: (...args) => jx.rc(jx.c5, 'addTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              cloneTab: (...args) => jx.rc(jx.c5, 'cloneTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              delTab: (...args) => jx.rc(jx.c5, 'delTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Events: {
              show: (...args) => jx.rc(jx.c6, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c6, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c6, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c6, 'get', args, { bags: ["dbadmin"] }),
            },
            Export: {
              database: (...args) => jx.rc(jx.c7, 'database', args, { bags: ["dbadmin"] }),
              export: (...args) => jx.rc(jx.c7, 'export', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c7, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c7, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c7, 'get', args, { bags: ["dbadmin"] }),
            },
            Import: {
              database: (...args) => jx.rc(jx.c8, 'database', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c8, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c8, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c8, 'get', args, { bags: ["dbadmin"] }),
              executeWebFile: (...args) => jx.rc(jx.c8, 'executeWebFile', args, { bags: ["dbadmin"] }),
              executeSqlFiles: (...args) => jx.rc(jx.c8, 'executeSqlFiles', args, { bags: ["dbadmin"], callback: [jaxon.dbadmin.upload], upload: 'dbadmin-import-sql-files-input' }),
            },
            Query: {
              database: (...args) => jx.rc(jx.c9, 'database', args, { bags: ["dbadmin","dbadmin.tab"] }),
              set: (...args) => jx.rc(jx.c9, 'set', args, { bags: ["dbadmin","dbadmin.tab"] }),
              has: (...args) => jx.rc(jx.c9, 'has', args, { bags: ["dbadmin","dbadmin.tab"] }),
              get: (...args) => jx.rc(jx.c9, 'get', args, { bags: ["dbadmin","dbadmin.tab"] }),
              exec: (...args) => jx.rc(jx.c9, 'exec', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Routines: {
              show: (...args) => jx.rc(jx.c10, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c10, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c10, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c10, 'get', args, { bags: ["dbadmin"] }),
            },
            Sequences: {
              show: (...args) => jx.rc(jx.c11, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c11, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c11, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c11, 'get', args, { bags: ["dbadmin"] }),
            },
            Tables: {
              show: (...args) => jx.rc(jx.c12, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c12, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c12, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c12, 'get', args, { bags: ["dbadmin"] }),
            },
            UserTypes: {
              show: (...args) => jx.rc(jx.c13, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c13, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c13, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c13, 'get', args, { bags: ["dbadmin"] }),
            },
            Views: {
              show: (...args) => jx.rc(jx.c14, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c14, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c14, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c14, 'get', args, { bags: ["dbadmin"] }),
            },
          },
          FuncComponent: {
            set: (...args) => jx.rc(jx.c15, 'set', args, { bags: ["dbadmin"] }),
            has: (...args) => jx.rc(jx.c15, 'has', args, { bags: ["dbadmin"] }),
            get: (...args) => jx.rc(jx.c15, 'get', args, { bags: ["dbadmin"] }),
          },
          Server: {
            Databases: {
              show: (...args) => jx.rc(jx.c16, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c16, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c16, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c16, 'get', args, { bags: ["dbadmin"] }),
            },
            EditorFunc: {
              set: (...args) => jx.rc(jx.c17, 'set', args, { bags: ["dbadmin","dbadmin.tab"] }),
              has: (...args) => jx.rc(jx.c17, 'has', args, { bags: ["dbadmin","dbadmin.tab"] }),
              get: (...args) => jx.rc(jx.c17, 'get', args, { bags: ["dbadmin","dbadmin.tab"] }),
              addTab: (...args) => jx.rc(jx.c17, 'addTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              cloneTab: (...args) => jx.rc(jx.c17, 'cloneTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
              delTab: (...args) => jx.rc(jx.c17, 'delTab', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Export: {
              server: (...args) => jx.rc(jx.c18, 'server', args, { bags: ["dbadmin"] }),
              export: (...args) => jx.rc(jx.c18, 'export', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c18, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c18, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c18, 'get', args, { bags: ["dbadmin"] }),
            },
            Import: {
              server: (...args) => jx.rc(jx.c19, 'server', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c19, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c19, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c19, 'get', args, { bags: ["dbadmin"] }),
              executeWebFile: (...args) => jx.rc(jx.c19, 'executeWebFile', args, { bags: ["dbadmin"] }),
              executeSqlFiles: (...args) => jx.rc(jx.c19, 'executeSqlFiles', args, { bags: ["dbadmin"], callback: [jaxon.dbadmin.upload], upload: 'dbadmin-import-sql-files-input' }),
            },
            Privilege: {
              add: (...args) => jx.rc(jx.c20, 'add', args, { bags: ["dbadmin"] }),
              create: (...args) => jx.rc(jx.c20, 'create', args, { bags: ["dbadmin"] }),
              edit: (...args) => jx.rc(jx.c20, 'edit', args, { bags: ["dbadmin"] }),
              update: (...args) => jx.rc(jx.c20, 'update', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c20, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c20, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c20, 'get', args, { bags: ["dbadmin"] }),
            },
            Privileges: {
              show: (...args) => jx.rc(jx.c21, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c21, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c21, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c21, 'get', args, { bags: ["dbadmin"] }),
            },
            Processes: {
              show: (...args) => jx.rc(jx.c22, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c22, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c22, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c22, 'get', args, { bags: ["dbadmin"] }),
            },
            Query: {
              server: (...args) => jx.rc(jx.c23, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
              set: (...args) => jx.rc(jx.c23, 'set', args, { bags: ["dbadmin","dbadmin.tab"] }),
              has: (...args) => jx.rc(jx.c23, 'has', args, { bags: ["dbadmin","dbadmin.tab"] }),
              get: (...args) => jx.rc(jx.c23, 'get', args, { bags: ["dbadmin","dbadmin.tab"] }),
              exec: (...args) => jx.rc(jx.c23, 'exec', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Server: {
              set: (...args) => jx.rc(jx.c24, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c24, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c24, 'get', args, { bags: ["dbadmin"] }),
            },
            Status: {
              show: (...args) => jx.rc(jx.c25, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c25, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c25, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c25, 'get', args, { bags: ["dbadmin"] }),
            },
            Variables: {
              show: (...args) => jx.rc(jx.c26, 'show', args, { bags: ["dbadmin"] }),
              set: (...args) => jx.rc(jx.c26, 'set', args, { bags: ["dbadmin"] }),
              has: (...args) => jx.rc(jx.c26, 'has', args, { bags: ["dbadmin"] }),
              get: (...args) => jx.rc(jx.c26, 'get', args, { bags: ["dbadmin"] }),
            },
          },
          Table: {
            Ddl: {
              Alter: {
                render: (...args) => jx.rc(jx.c27, 'render', args, { bags: ["dbadmin","dbadmin.table"] }),
                set: (...args) => jx.rc(jx.c27, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                has: (...args) => jx.rc(jx.c27, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                get: (...args) => jx.rc(jx.c27, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              Column: {
                CreateFunc: {
                  add: (...args) => jx.rc(jx.c28, 'add', args, { bags: ["dbadmin","dbadmin.table"] }),
                  save: (...args) => jx.rc(jx.c28, 'save', args, { bags: ["dbadmin","dbadmin.table"] }),
                  set: (...args) => jx.rc(jx.c28, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                  has: (...args) => jx.rc(jx.c28, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                  get: (...args) => jx.rc(jx.c28, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
                DeleteFunc: {
                  exec: (...args) => jx.rc(jx.c29, 'exec', args, { bags: ["dbadmin","dbadmin.table"] }),
                  cancel: (...args) => jx.rc(jx.c29, 'cancel', args, { bags: ["dbadmin","dbadmin.table"] }),
                  set: (...args) => jx.rc(jx.c29, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                  has: (...args) => jx.rc(jx.c29, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                  get: (...args) => jx.rc(jx.c29, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
                MoveFunc: {
                  up: (...args) => jx.rc(jx.c30, 'up', args, { bags: ["dbadmin","dbadmin.table"] }),
                  down: (...args) => jx.rc(jx.c30, 'down', args, { bags: ["dbadmin","dbadmin.table"] }),
                  set: (...args) => jx.rc(jx.c30, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                  has: (...args) => jx.rc(jx.c30, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                  get: (...args) => jx.rc(jx.c30, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
                UpdateFunc: {
                  edit: (...args) => jx.rc(jx.c31, 'edit', args, { bags: ["dbadmin","dbadmin.table"] }),
                  save: (...args) => jx.rc(jx.c31, 'save', args, { bags: ["dbadmin","dbadmin.table"] }),
                  cancel: (...args) => jx.rc(jx.c31, 'cancel', args, { bags: ["dbadmin","dbadmin.table"] }),
                  set: (...args) => jx.rc(jx.c31, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                  has: (...args) => jx.rc(jx.c31, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                  get: (...args) => jx.rc(jx.c31, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
                },
              },
              Create: {
                render: (...args) => jx.rc(jx.c32, 'render', args, { bags: ["dbadmin","dbadmin.table"] }),
                set: (...args) => jx.rc(jx.c32, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                has: (...args) => jx.rc(jx.c32, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                get: (...args) => jx.rc(jx.c32, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              QueryFunc: {
                changes: (...args) => jx.rc(jx.c33, 'changes', args, { bags: ["dbadmin","dbadmin.table"] }),
                createTable: (...args) => jx.rc(jx.c33, 'createTable', args, { bags: ["dbadmin","dbadmin.table"] }),
                alterTable: (...args) => jx.rc(jx.c33, 'alterTable', args, { bags: ["dbadmin","dbadmin.table"] }),
                set: (...args) => jx.rc(jx.c33, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                has: (...args) => jx.rc(jx.c33, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                get: (...args) => jx.rc(jx.c33, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              Table: {
                show: (...args) => jx.rc(jx.c34, 'show', args, { bags: ["dbadmin","dbadmin.table"] }),
                set: (...args) => jx.rc(jx.c34, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                has: (...args) => jx.rc(jx.c34, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                get: (...args) => jx.rc(jx.c34, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
              TableFunc: {
                create: (...args) => jx.rc(jx.c35, 'create', args, { bags: ["dbadmin","dbadmin.table"] }),
                alter: (...args) => jx.rc(jx.c35, 'alter', args, { bags: ["dbadmin","dbadmin.table"] }),
                drop: (...args) => jx.rc(jx.c35, 'drop', args, { bags: ["dbadmin","dbadmin.table"] }),
                set: (...args) => jx.rc(jx.c35, 'set', args, { bags: ["dbadmin","dbadmin.table"] }),
                has: (...args) => jx.rc(jx.c35, 'has', args, { bags: ["dbadmin","dbadmin.table"] }),
                get: (...args) => jx.rc(jx.c35, 'get', args, { bags: ["dbadmin","dbadmin.table"] }),
              },
            },
            Dml: {
              Delete: {
                exec: (...args) => jx.rc(jx.c36, 'exec', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c36, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                set: (...args) => jx.rc(jx.c36, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                has: (...args) => jx.rc(jx.c36, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                get: (...args) => jx.rc(jx.c36, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
              Insert: {
                show: (...args) => jx.rc(jx.c37, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                save: (...args) => jx.rc(jx.c37, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryForm: (...args) => jx.rc(jx.c37, 'showQueryForm', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c37, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                set: (...args) => jx.rc(jx.c37, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                has: (...args) => jx.rc(jx.c37, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                get: (...args) => jx.rc(jx.c37, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
              Update: {
                edit: (...args) => jx.rc(jx.c38, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                save: (...args) => jx.rc(jx.c38, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryForm: (...args) => jx.rc(jx.c38, 'showQueryForm', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c38, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                set: (...args) => jx.rc(jx.c38, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                has: (...args) => jx.rc(jx.c38, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                get: (...args) => jx.rc(jx.c38, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
            },
            Dql: {
              Options: {
                Fields: {
                  set: (...args) => jx.rc(jx.c39, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  has: (...args) => jx.rc(jx.c39, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  get: (...args) => jx.rc(jx.c39, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  Columns: {
                    edit: (...args) => jx.rc(jx.c40, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c40, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    set: (...args) => jx.rc(jx.c40, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    has: (...args) => jx.rc(jx.c40, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    get: (...args) => jx.rc(jx.c40, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  },
                  Filters: {
                    edit: (...args) => jx.rc(jx.c41, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c41, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    set: (...args) => jx.rc(jx.c41, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    has: (...args) => jx.rc(jx.c41, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    get: (...args) => jx.rc(jx.c41, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  },
                  Form: {
                    Columns: {
                      show: (...args) => jx.rc(jx.c42, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c42, 'add', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c42, 'del', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      set: (...args) => jx.rc(jx.c42, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      has: (...args) => jx.rc(jx.c42, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      get: (...args) => jx.rc(jx.c42, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    },
                    Filters: {
                      show: (...args) => jx.rc(jx.c43, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c43, 'add', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c43, 'del', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      set: (...args) => jx.rc(jx.c43, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      has: (...args) => jx.rc(jx.c43, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      get: (...args) => jx.rc(jx.c43, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    },
                    Sorting: {
                      show: (...args) => jx.rc(jx.c44, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c44, 'add', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c44, 'del', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      set: (...args) => jx.rc(jx.c44, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      has: (...args) => jx.rc(jx.c44, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                      get: (...args) => jx.rc(jx.c44, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    },
                  },
                  Sorting: {
                    edit: (...args) => jx.rc(jx.c45, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c45, 'save', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    set: (...args) => jx.rc(jx.c45, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    has: (...args) => jx.rc(jx.c45, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                    get: (...args) => jx.rc(jx.c45, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  },
                },
                Values: {
                  saveSelectLimit: (...args) => jx.rc(jx.c46, 'saveSelectLimit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  saveSelectTotal: (...args) => jx.rc(jx.c46, 'saveSelectTotal', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  saveTextLength: (...args) => jx.rc(jx.c46, 'saveTextLength', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  set: (...args) => jx.rc(jx.c46, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  has: (...args) => jx.rc(jx.c46, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                  get: (...args) => jx.rc(jx.c46, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                },
              },
              ResultSet: {
                html: (...args) => jx.rc(jx.c47, 'html', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                page: (...args) => jx.rc(jx.c47, 'page', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                paginationAttributes: (...args) => jx.rc(jx.c47, 'paginationAttributes', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                clear: (...args) => jx.rc(jx.c47, 'clear', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                visible: (...args) => jx.rc(jx.c47, 'visible', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                render: (...args) => jx.rc(jx.c47, 'render', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                item: (...args) => jx.rc(jx.c47, 'item', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                set: (...args) => jx.rc(jx.c47, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                has: (...args) => jx.rc(jx.c47, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                get: (...args) => jx.rc(jx.c47, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
              Select: {
                show: (...args) => jx.rc(jx.c48, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                edit: (...args) => jx.rc(jx.c48, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select","dbadmin.tab"] }),
                set: (...args) => jx.rc(jx.c48, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                has: (...args) => jx.rc(jx.c48, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                get: (...args) => jx.rc(jx.c48, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
            },
          },
          View: {
            Ddl: {
              Form: {
                add: (...args) => jx.rc(jx.c49, 'add', args, { bags: ["dbadmin"] }),
                edit: (...args) => jx.rc(jx.c49, 'edit', args, { bags: ["dbadmin"] }),
                set: (...args) => jx.rc(jx.c49, 'set', args, { bags: ["dbadmin"] }),
                has: (...args) => jx.rc(jx.c49, 'has', args, { bags: ["dbadmin"] }),
                get: (...args) => jx.rc(jx.c49, 'get', args, { bags: ["dbadmin"] }),
              },
              View: {
                show: (...args) => jx.rc(jx.c50, 'show', args, { bags: ["dbadmin"] }),
                set: (...args) => jx.rc(jx.c50, 'set', args, { bags: ["dbadmin"] }),
                has: (...args) => jx.rc(jx.c50, 'has', args, { bags: ["dbadmin"] }),
                get: (...args) => jx.rc(jx.c50, 'get', args, { bags: ["dbadmin"] }),
              },
              ViewFunc: {
                create: (...args) => jx.rc(jx.c51, 'create', args, { bags: ["dbadmin"] }),
                update: (...args) => jx.rc(jx.c51, 'update', args, { bags: ["dbadmin"] }),
                drop: (...args) => jx.rc(jx.c51, 'drop', args, { bags: ["dbadmin"] }),
                set: (...args) => jx.rc(jx.c51, 'set', args, { bags: ["dbadmin"] }),
                has: (...args) => jx.rc(jx.c51, 'has', args, { bags: ["dbadmin"] }),
                get: (...args) => jx.rc(jx.c51, 'get', args, { bags: ["dbadmin"] }),
              },
            },
            Dql: {
              Select: {
                show: (...args) => jx.rc(jx.c52, 'show', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                edit: (...args) => jx.rc(jx.c52, 'edit', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                set: (...args) => jx.rc(jx.c52, 'set', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                has: (...args) => jx.rc(jx.c52, 'has', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
                get: (...args) => jx.rc(jx.c52, 'get', args, { bags: ["dbadmin","dbadmin.table","dbadmin.select"] }),
              },
            },
          },
        },
        Menu: {
          Database: {
            Command: {
              set: (...args) => jx.rc(jx.c53, 'set', args),
              has: (...args) => jx.rc(jx.c53, 'has', args),
              get: (...args) => jx.rc(jx.c53, 'get', args),
            },
            Schemas: {
              set: (...args) => jx.rc(jx.c54, 'set', args),
              has: (...args) => jx.rc(jx.c54, 'has', args),
              get: (...args) => jx.rc(jx.c54, 'get', args),
            },
          },
          Sections: {
            set: (...args) => jx.rc(jx.c55, 'set', args),
            has: (...args) => jx.rc(jx.c55, 'has', args),
            get: (...args) => jx.rc(jx.c55, 'get', args),
          },
          Server: {
            Command: {
              set: (...args) => jx.rc(jx.c56, 'set', args),
              has: (...args) => jx.rc(jx.c56, 'has', args),
              get: (...args) => jx.rc(jx.c56, 'get', args),
            },
            Databases: {
              set: (...args) => jx.rc(jx.c57, 'set', args),
              has: (...args) => jx.rc(jx.c57, 'has', args),
              get: (...args) => jx.rc(jx.c57, 'get', args),
            },
          },
        },
        Page: {
          DbConnection: {
            set: (...args) => jx.rc(jx.c58, 'set', args),
            has: (...args) => jx.rc(jx.c58, 'has', args),
            get: (...args) => jx.rc(jx.c58, 'get', args),
          },
        },
        TabFunc: {
          add: (...args) => jx.rc(jx.c59, 'add', args, { bags: ["dbadmin","dbadmin.tab"] }),
          del: (...args) => jx.rc(jx.c59, 'del', args, { bags: ["dbadmin","dbadmin.tab"] }),
          editTitle: (...args) => jx.rc(jx.c59, 'editTitle', args, { bags: ["dbadmin","dbadmin.tab"] }),
          saveTitle: (...args) => jx.rc(jx.c59, 'saveTitle', args, { bags: ["dbadmin","dbadmin.tab"] }),
          saveAppTabs: (...args) => jx.rc(jx.c59, 'saveAppTabs', args, { bags: ["dbadmin","dbadmin.tab"] }),
          set: (...args) => jx.rc(jx.c59, 'set', args, { bags: ["dbadmin","dbadmin.tab"] }),
          has: (...args) => jx.rc(jx.c59, 'has', args, { bags: ["dbadmin","dbadmin.tab"] }),
          get: (...args) => jx.rc(jx.c59, 'get', args, { bags: ["dbadmin","dbadmin.tab"] }),
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

    /**
     * Jaxon javascript callback for upload requests.
     */
    self.upload = {
        /**
         * @param {object} oRequest
         *
         * @returns {void}
         */
        onInitialize: (oRequest) => {
            // The upload field id must be associated to the current app tab id.
            const appTabId = jaxon.bag.getEntry('dbadmin', 'tab.app') ?? '';
            oRequest.upload = `${appTabId}_${oRequest.upload}`;
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