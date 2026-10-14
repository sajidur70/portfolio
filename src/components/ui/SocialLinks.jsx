import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiLink, FiMail } from "react-icons/fi";
import { personal, socials } from "@/data/portfolio";

// Which icon to show for each social "name" in the data file
const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

// Round icon links: GitHub, LinkedIn (when it has a url) and Email.
// Reused in the Hero, Contact and Footer.
export default function SocialLinks({ className = "" }) {
  // Keep only links that have a url ("" = hidden)
  const visibleSocials = socials.filter((social) => social.url);

  const linkStyle =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:-translate-y-1 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400";

  return (
    <ul className={`flex gap-4 ${className}`}>
      {visibleSocials.map((social) => {
        const Icon = icons[social.name] ?? FiLink; // FiLink if no icon is set
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={linkStyle}
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
      <li>
        <a
          href={`mailto:${personal.email}`}
          aria-label="Email"
          className={linkStyle}
        >
          <FiMail className="h-5 w-5" />
        </a>
      </li>
    </ul>
  );
}
