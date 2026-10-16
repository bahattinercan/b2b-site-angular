# ShopApp — Angular

B2B sitesinin **Angular** sürümü: mağaza ön yüzü ve ayrı bir yönetim (admin) modülü.

## Yapı

```
ShopApp/src/app/
├── admin/
│   ├── admin.module.ts / admin-routing.module.ts
│   ├── auth/            # giriş bileşeni + auth.guard.ts
│   └── categories/      # kategori listesi ve formu (CRUD)
└── ...                  # mağaza bileşenleri
```

- `auth.guard.ts` ile admin rotaları oturuma bağlı; giriş yapılmadan erişilemiyor.
- `data.json` sahte backend olarak kullanılıyor; `auth-middleware.js` yerel geliştirme için
  küçük bir Node ara katmanı.
- Bileşenlerin yanında Karma/Jasmine **spec dosyaları** var (`.spec.ts`) — bu repoda test
  altyapısı kurulu.

## Çalıştırma

```bash
cd ShopApp
npm install
npm start          # ng serve
npm test           # Karma + Jasmine
```

## Sınırlar

Gerçek bir API yok; veri `data.json` ve ara katman üzerinden geliyor. Kategori yönetimi
tamamlandı, ürün ve sepet akışları aynı derinlikte değil.
