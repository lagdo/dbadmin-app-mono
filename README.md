# dbadmin-backpack

Monorepo for the Backpack addon development

### Create the monorepo

Add the Backpack repo

```bash
git subtree add --prefix dbadmin git@github.com:lagdo/dbadmin-app.git main --squash
```

Add the Backpack addon repo

```bash
git subtree add --prefix dbadmin git@github.com:lagdo/dbadmin-backpack-addon.git main --squash
```
