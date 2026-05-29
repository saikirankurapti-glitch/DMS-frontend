# Pharma DMS - Frontend

Modern React + TypeScript frontend for the Pharma Document Management System.

## 🚀 Quick Start.

### Prerequisites

- Node.js 18+ and npm/yarn
- Backend API running on http://localhost:8000

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Access the application at: http://localhost:3000

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.tsx       # Main layout with sidebar
│   │   └── ProtectedRoute.tsx # Route authentication
│   ├── context/             # React contexts
│   │   └── AuthContext.tsx  # Authentication state
│   ├── pages/               # Page components
│   │   ├── Login.tsx        # Login page
│   │   ├── Dashboard.tsx    # Dashboard
│   │   ├── Users/           # User management pages
│   │   │   ├── UserList.tsx
│   │   │   ├── CreateUser.tsx
│   │   │   ├── EditUser.tsx (create this)
│   │   │   └── UserDetail.tsx (create this)
│   │   └── AuditLogs.tsx    # Audit logs (create this)
│   ├── services/            # API service layer
│   │   ├── api.ts           # Axios instance
│   │   ├── auth.service.ts  # Auth API calls
│   │   ├── user.service.ts  # User API calls
│   │   └── audit.service.ts # Audit API calls
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── config/              # Configuration
│   │   └── api.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind CSS
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## ✨ Features Implemented

### Authentication
- ✅ Login page with form validation
- ✅ JWT token management
- ✅ Protected routes
- ✅ Role-based access control
- ✅ Auto-redirect on auth failure

### Dashboard
- ✅ User profile display
- ✅ System statistics (for admins)
- ✅ Quick actions
- ✅ Role-based UI

### User Management (Admin Only)
- ✅ User list with pagination
- ✅ Search and filtering
- ✅ Create new users
- ⚠️  Edit users (needs EditUser.tsx component)
- ⚠️  View user details (needs UserDetail.tsx component)
- ✅ Activate/deactivate users
- ✅ Delete users

### Audit Logs (Admin Only)
- ⚠️  View audit logs (needs AuditLogs.tsx component)
- ⚠️  Filter and search logs
- ⚠️  Pagination

## 🎨 UI Components

### Built-in CSS Classes (Tailwind)

```css
/* Buttons */
.btn - Base button
.btn-primary - Primary button (blue)
.btn-secondary - Secondary button (gray)
.btn-danger - Danger button (red)

/* Forms */
.input - Text input
.label - Form label

/* Cards */
.card - White card with shadow

/* Badges */
.badge - Base badge
.badge-green - Green badge (active)
.badge-red - Red badge (inactive)
.badge-blue - Blue badge (roles)
.badge-gray - Gray badge
```

## 🔌 API Integration

### Base URL
```
http://localhost:8000/api/v1
```

### Services

**auth.service.ts**
- login(credentials)
- logout()
- getCurrentUser()
- isAuthenticated()
- hasRole(role)
- isAdmin()

**user.service.ts**
- getUsers(filters)
- getUserById(id)
- createUser(userData)
- updateUser(id, userData)
- activateUser(id)
- deactivateUser(id)
- resetPassword(id, data)
- deleteUser(id)

**audit.service.ts**
- getAuditLogs(filters)
- getActions()
- getEntityTypes()

## 📝 Creating Missing Components

### EditUser.tsx

Copy `CreateUser.tsx` and modify to:
1. Load existing user data
2. Pre-populate form fields
3. Use `updateUser` instead of `createUser`
4. Don't include password field

### UserDetail.tsx

Create a view-only page showing:
- User profile information
- Assigned roles
- Activity status
- Last login
- Created/updated dates
- Action buttons (Edit, Activate/Deactivate, Reset Password)

### AuditLogs.tsx

Create a table view with:
- List of audit log entries
- Filtering by action, entity type, user, date range
- Pagination
- Detailed view of log entries
- Export functionality (optional)

See `frontend/FRONTEND_COMPONENTS.md` for detailed code examples.

## 🎯 User Stories Coverage

| User Story | Component | Status |
|------------|-----------|--------|
| US-1.1: Admin create users | CreateUser.tsx | ✅ |
| US-1.2: Assign roles | CreateUser.tsx, EditUser.tsx | ✅/⚠️ |
| US-2.1: View all users | UserList.tsx | ✅ |
| US-2.2: Filter users | UserList.tsx | ✅ |
| US-3.1: Update user info | EditUser.tsx | ⚠️ |
| US-3.2: Modify roles | EditUser.tsx | ⚠️ |
| US-4.1: Deactivate users | UserList.tsx | ✅ |
| US-4.2: Activate users | UserList.tsx | ✅ |
| US-5.1: User login | Login.tsx | ✅ |
| US-5.2: Invalid credentials error | Login.tsx | ✅ |
| US-6.1: Admin-only access | ProtectedRoute.tsx | ✅ |
| US-6.2: Role-based access | ProtectedRoute.tsx | ✅ |
| US-8.1: Reset password | EditUser.tsx | ⚠️ |
| US-9.1: View audit logs | AuditLogs.tsx | ⚠️ |
| US-10.1: View own profile | Dashboard.tsx | ✅ |
| US-10.2: View user profile | UserDetail.tsx | ⚠️ |

✅ = Complete | ⚠️ = Component needs to be created

## 🔐 Environment Variables

Create `.env` file:

```bash
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

## 🧪 Testing

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Test Credentials

- Username: `admin`
- Password: `Admin@123456`

⚠️ Change password after first login!

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the primary color:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Custom color palette
      },
    },
  },
}
```

### Logo

Replace the logo in `Layout.tsx` component.

## 🐛 Troubleshooting

### CORS Errors

Ensure backend has correct CORS settings:
```python
BACKEND_CORS_ORIGINS=["http://localhost:3000"]
```

### API Connection Failed

1. Check backend is running on port 8000
2. Verify `VITE_API_BASE_URL` in `.env`
3. Check browser console for errors

### Build Errors

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📚 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router 6** - Routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **date-fns** - Date formatting

## 🚀 Deployment

### Build

```bash
npm run build
```

Output in `dist/` folder.

### Deploy to Production

1. **Static hosting** (Netlify, Vercel, etc.):
   - Upload `dist/` folder
   - Configure environment variables
   - Set up redirects for SPA routing

2. **Nginx**:
   ```nginx
   location / {
     root /path/to/dist;
     try_files $uri /index.html;
   }
   ```

3. **Docker**:
   ```dockerfile
   FROM nginx:alpine
   COPY dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

## 📄 License

MIT License - See LICENSE file for details.

## 🤝 Contributing

See CONTRIBUTING.md for guidelines.

---

**Version**: 1.0.0  
**Status**: Phase 1 - Core features complete, some components pending  
**Last Updated**: 2024


