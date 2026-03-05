import { socialLinks } from "@/data/socialLinks";

interface SocialLinksProps {
  size?: number;
  className?: string;
}

const SocialLinks = ({ size = 18, className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label={link.label}
        >
          <link.icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
