"use client";

import Link from "next/link";

const LINK_MAP = {
  "https://tejaspokale.tech": {
    href: "https://tejaspokale.tech",
    label: "https://tejaspokale.tech",
  },
  "https://github.com/tejaspokale22": {
    href: "https://github.com/tejaspokale22",
    label: "https://github.com/tejaspokale22",
  },
  "https://www.linkedin.com/in/tejaspokale22/": {
    href: "https://www.linkedin.com/in/tejaspokale22",
    label: "https://www.linkedin.com/in/tejaspokale22",
  },
  "https://leetcode.com/u/tejaspokale22/": {
    href: "https://leetcode.com/u/tejaspokale22",
    label: "https://leetcode.com/u/tejaspokale22",
  },
  "https://x.com/tejaspokale_22": {
    href: "https://x.com/tejaspokale_22",
    label: "https://x.com/tejaspokale_22",
  },
};

const URL_REGEX = /(https?:\/\/[^\s]+)/g;

export function linkifyMessage(text) {
  if (!text) return text;

  const parts = text.split(URL_REGEX);

  return parts.map((part, index) => {
    if (!part) return null;

    const isUrl = index % 2 === 1 && /^https?:\/\//.test(part);

    if (isUrl) {
      const key = Object.keys(LINK_MAP)
        .sort((a, b) => b.length - a.length)
        .find((url) => part.startsWith(url));

      const link = key ? LINK_MAP[key] : { href: part, label: part };

      return (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="text-blue-300 dark:text-blue-900 hover:underline"
        >
          {link.label}
        </Link>
      );
    }

    return part;
  });
}
