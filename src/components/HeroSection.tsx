import { motion } from "framer-motion";
import { Github, Download, Terminal, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "hsl(175, 80%, 50%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-15"
        style={{ background: "hsl(260, 70%, 60%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">v2.0.0 — Now with Security Scanner</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="text-gradient">CodeFlow</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Software Evolution Intelligence + Security Scanner for Git Repositories
          </p>
          <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto mb-10">
            Analyze hotspots, track code churn, detect secrets — all from one powerful CLI tool.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/shreyashgautam/Codeflow"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all glow-primary"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#installation"
              className="inline-flex items-center gap-3 glass px-8 py-3.5 rounded-xl font-semibold text-base text-foreground hover:bg-card/60 transition-all"
            >
              <Download className="w-5 h-5" />
              Installation Guide
            </a>
          </div>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-strong rounded-2xl overflow-hidden glow-primary">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-left">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">$</span>
                <motion.span
                  className="text-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  codeflow security
                </motion.span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-4 space-y-1"
              >
                <p className="text-primary">🔐 Security Scan</p>
                <p className="text-yellow-400/80 mt-2">⚠️  Found 3 potential secrets</p>
                <div className="mt-3 border border-white/[0.06] rounded-lg overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 px-4 py-2 text-xs text-muted-foreground border-b border-white/[0.06]">
                    <span>File</span><span>Line</span><span>Type</span><span>Value</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 px-4 py-2 text-xs text-foreground/80">
                    <span>src/config.ts</span><span>12</span><span className="text-destructive">API Key</span><span>sk_t...ABC</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 px-4 py-2 text-xs text-foreground/80">
                    <span>.env.backup</span><span>5</span><span className="text-yellow-400">Secret</span><span>a1b2...xyz</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
