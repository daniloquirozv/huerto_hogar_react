# Migración a Vite - Notas

## ✅ Cambios Realizados

### 1. Archivos Creados
- `vite.config.js` - Configuración de Vite con React y Vitest
- `index.html` - Movido a la raíz del proyecto (antes estaba en `/public`)
- `.env.example` - Plantilla para variables de entorno

### 2. Archivos Modificados
- `package.json` - Scripts actualizados para usar Vite
- `src/setupTests.js` - Configurado para Vitest
- `README.md` - Actualizado con nuevas instrucciones

### 3. Archivos Renombrados
- `src/App.js` → `src/App.jsx`
- `src/index.js` → `src/index.jsx`
- `src/App.test.js` → `src/App.test.jsx`

### 4. Dependencias
- ✅ Instaladas: `vite`, `@vitejs/plugin-react`, `vitest`, `@vitest/coverage-v8`
- ❌ Desinstaladas: `react-scripts` (ya no es necesario)

## 🎯 Beneficios de Vite

1. **Velocidad**: Servidor de desarrollo instantáneo (HMR ultrarrápido)
2. **Build optimizado**: Builds más rápidos con Rollup
3. **Testing moderno**: Vitest es más rápido que Jest
4. **ESM nativo**: Usa módulos ES nativos del navegador
5. **Menos dependencias**: ~1200 paquetes menos que CRA

## 📝 Notas Importantes

### Variables de Entorno
- En Vite, las variables de entorno deben comenzar con `VITE_`
- Ejemplo: `VITE_API_URL=http://localhost:5000`
- Acceso: `import.meta.env.VITE_API_URL`

### Archivos Públicos
- Los archivos en `/public` se sirven desde la raíz
- No uses `%PUBLIC_URL%`, usa rutas relativas: `/favicon.ico`

### Imports
- Usa extensiones `.jsx` para archivos con JSX
- Los imports relativos necesitan la extensión: `import App from './App.jsx'`

## 🚀 Próximos Pasos (Opcional)

1. **ESLint**: Configurar ESLint para Vite
2. **TypeScript**: Migrar a TypeScript si lo deseas
3. **PWA**: Configurar plugin para PWA con Vite
4. **Análisis de Bundle**: Usar `rollup-plugin-visualizer`

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview

# Tests
npm test

# Tests con UI
npm run test:ui

# Coverage
npm run coverage
```

## ⚠️ Troubleshooting

### Error: "The JSX syntax extension is not currently enabled"
- Solución: Asegúrate de que los archivos con JSX tengan extensión `.jsx`

### Error: Variables de entorno undefined
- Solución: Las variables deben empezar con `VITE_`

### Puerto 3000 ocupado
- Solución: Cambiar puerto en `vite.config.js` → `server.port`
