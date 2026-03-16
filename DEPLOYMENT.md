# Deploy to GitHub Pages + Namecheap Custom Domain

This guide walks you through deploying your portfolio to GitHub Pages and connecting your Namecheap domain.

---

## Part 1: Deploy to GitHub Pages

### Step 1: Enable GitHub Pages

1. Push your code to GitHub (if not already):
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. Go to your repo on GitHub → **Settings** → **Pages**

3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**

4. The workflow will run automatically on every push to `main`. After the first run, your site will be live at:
   - `https://<username>.github.io/<repo-name>/` (project page)
   - Or at your custom domain once configured (see Part 2)

### Step 2: Verify Deployment

- Check the **Actions** tab to see the workflow status
- Once complete, visit your GitHub Pages URL from the repo Settings → Pages

---

## Part 2: Connect Your Namecheap Domain

### A. Add Custom Domain in GitHub

1. In your repo: **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g. `www.yourdomain.com` or `yourdomain.com`)
3. Click **Save**
4. GitHub will create a `CNAME` file in your deployment (or you may need to add it manually—see note below)

### B. Configure DNS at Namecheap

1. Log in to [Namecheap](https://www.namecheap.com) → **Domain List** → **Manage** next to your domain

2. Go to **Advanced DNS** tab

3. Add/update these records:

   **Option 1: Use `www` subdomain (recommended)**

   | Type | Host | Value | TTL |
   |------|------|-------|-----|
   | CNAME | www | `<username>.github.io` | Automatic |
   | A | @ | 185.199.108.153 | Automatic |
   | A | @ | 185.199.109.153 | Automatic |
   | A | @ | 185.199.110.153 | Automatic |
   | A | @ | 185.199.111.153 | Automatic |

   Replace `<username>` with your GitHub username.

   **Option 2: Use apex domain only (yourdomain.com)**

   | Type | Host | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 185.199.108.153 | Automatic |
   | A | @ | 185.199.109.153 | Automatic |
   | A | @ | 185.199.110.153 | Automatic |
   | A | @ | 185.199.111.153 | Automatic |
   | CNAME | www | `<username>.github.io` | Automatic |

4. Remove any conflicting records (e.g. old CNAME for @ if you had one)

5. Set **URL Redirect** (optional): If using apex, you can redirect `www` → `@` or vice versa in Namecheap’s **Redirect Domain** section

### C. Enforce HTTPS (Recommended)

1. In GitHub: **Settings** → **Pages**
2. Enable **Enforce HTTPS**
3. Wait for the certificate to be issued (can take a few minutes to an hour)

---

## Part 3: CNAME File for Custom Domain

When using GitHub Actions for deployment, the custom domain is usually stored in GitHub’s Pages settings. If your domain doesn’t stick or you deploy from a branch, add a `CNAME` file:

1. Create `public/CNAME` in your project with only your domain:
   ```
   www.yourdomain.com
   ```
   or
   ```
   yourdomain.com
   ```

2. Commit and push. The `out` folder will include `CNAME` when built.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 on GitHub Pages | Ensure **Source** is **GitHub Actions** and the workflow ran successfully |
| Assets not loading | If using project page URL before custom domain, you may need to set `BASE_PATH` in the workflow (see `.github/workflows/deploy.yml`) |
| Domain not resolving | DNS can take up to 48 hours; usually 15–30 minutes. Check with [dnschecker.org](https://dnschecker.org) |
| "Domain’s DNS record could not be retrieved" | Verify A/CNAME records at Namecheap match the values above |
| HTTPS not working | Wait for certificate provisioning, or ensure no conflicting CAA records |

---

## Quick Reference: GitHub Pages IPs

Use these for A records when pointing your apex domain to GitHub Pages:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153
