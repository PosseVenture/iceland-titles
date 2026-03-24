# Image Placeholders — Icelandic Titles

All images below need replacing with real high-res photographs.
Use Unsplash (https://unsplash.com) or Pexels (https://pexels.com).

## Required Images

### OG / Social sharing
| File               | Size       | Unsplash Query                                        |
|--------------------|------------|-------------------------------------------------------|
| `og-image.jpg`     | 1200×630   | "Snæfellsjökull glacier golden hour Iceland wide"     |

### Hero
| File                          | Notes                                           |
|-------------------------------|-------------------------------------------------|
| `hero-glacier-lights.jpg`     | Snæfellsjökull under northern lights — dramatic |
| `hero-glacier-sunset.jpg`     | Glacier at golden hour — warm tones             |

### Gallery (used in /the-land/snaefellsnes)
| File                     | Unsplash Query / Description                                          |
|--------------------------|-----------------------------------------------------------------------|
| `gallery-glacier-dawn.jpg`    | "Snæfellsjökull glacier sunrise lava field"                      |
| `gallery-aurora.jpg`          | "northern lights aurora Snæfellsnes Iceland"                     |
| `gallery-lava-rocks.jpg`      | "lava rock formations Iceland huldufólk elf rocks"               |
| `gallery-black-beach.jpg`     | "Djúpalónssandur black sand beach Snæfellsnes"                   |
| `gallery-puffins.jpg`         | "puffins Iceland sea cliffs Snæfellsnes"                         |
| `gallery-arnarstapi.jpg`      | "Arnarstapi sea arch coastline Iceland Snæfellsnes"              |

### Products
| File                     | Description                                       |
|--------------------------|---------------------------------------------------|
| `product-certificate.jpg`    | Beautiful certificate mockup / parchment style    |
| `product-giftbox.jpg`        | Luxury Iceland gift box, glacier-blue ribbon      |
| `product-coaster.jpg`        | Volcanic basalt coaster with engraving            |
| `product-map.jpg`            | Snæfellsnes printed map with plot highlighted     |

### Adopt
| File                     | Unsplash Query                                    |
|--------------------------|---------------------------------------------------|
| `adopt-horse.jpg`            | "Icelandic horse mane Iceland landscape"          |
| `adopt-fox.jpg`              | "arctic fox Iceland white winter"                 |
| `adopt-puffin.jpg`           | "puffin Iceland close up"                         |

## Alt Text Guidelines

Every image MUST have descriptive alt text. Examples:

- Hero: "Mystical Snæfellsjökull glacier rising above Snæfellsnes Peninsula under
         the Northern Lights — home of guardian spirit Bárður Snæfellsás and the
         huldufólk hidden people"

- Gallery aurora: "Northern lights dancing over Snæfellsjökull glacier — where
                   guardian spirit Bárður watches from within the ice"

- Lava rocks: "Ancient lava rock formations on Snæfellsnes — believed by
               Icelanders to be homes of huldufólk (hidden people / elves)"

- Horse: "Pure-bred Icelandic horse with flowing mane in the dramatic
          Snæfellsnes landscape — a spirit of Iceland's wild soul"

## Using next/image

```tsx
import Image from "next/image";

<Image
  src="/images/hero-glacier-lights.jpg"
  alt="Mystical Snæfellsjökull glacier..."
  fill
  priority        // on hero / above-fold
  className="object-cover"
  sizes="100vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."  // generate with: npx plaiceholder
/>
```
