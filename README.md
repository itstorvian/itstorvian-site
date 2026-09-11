# itstorvian.xyz

Personal site for Torvian, founder of [Nexrow](https://nexrow.xyz).

Plain HTML and CSS. No framework, no build step, no JavaScript, no tracking, no third-party requests.

## Files

```
index.html      the page
styles.css      the styles
CNAME           custom domain for GitHub Pages
```

## Local preview

Open `index.html` in a browser. Nothing to install.

## Deploy to GitHub Pages

1. Push these files to the default branch of a repo:

```bash
git init && git add . && git commit -m "Personal site" && git branch -M main
```

```bash
git remote add origin https://github.com/itstorvian/itstorvian.github.io.git && git push -u origin main
```

2. Go to **Settings > Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.

3. Under **Settings > Pages > Custom domain**, add `itstorvian.xyz`. The `CNAME` file already sets this, so it usually fills in on its own after the first deploy.

4. Point DNS at GitHub Pages:

   | Type  | Name  | Value |
   |-------|-------|-------|
   | A     | `@`   | `185.199.108.153` |
   | A     | `@`   | `185.199.109.153` |
   | A     | `@`   | `185.199.110.153` |
   | A     | `@`   | `185.199.111.153` |
   | CNAME | `www` | `itstorvian.github.io.` |

5. Once DNS resolves, turn on **Enforce HTTPS**.

DNS can take a few minutes or a few hours.

## Editing

Links live in `index.html`. Colors are CSS custom properties at the top of `styles.css`. Page metadata sits in the `<head>`, so update every copy of the description if you change it.
