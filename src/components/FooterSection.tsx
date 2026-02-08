import { Github, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black text-gradient">CodeFlow</span>
          <span className="text-xs text-muted-foreground">v2.0.0</span>
        </div>

        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-red-400" /> by Shreyash Gautam
        </p>

        <a
          href="https://github.com/shreyashgautam/Codeflow"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
