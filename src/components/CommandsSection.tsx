import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const commands = [
  { cmd: "codeflow init", desc: "Initialize repository analysis", tag: "setup" },
  { cmd: "codeflow hotspots", desc: "Find frequently changed files", tag: "analysis" },
  { cmd: "codeflow security", desc: "Scan for secrets & vulnerabilities", tag: "security" },
  { cmd: "codeflow precommit", desc: "Pre-commit safety check", tag: "security" },
  { cmd: "codeflow changes <file>", desc: "View file change history", tag: "analysis" },
  { cmd: "codeflow churn --last 1w", desc: "Weekly code churn analysis", tag: "analysis" },
  { cmd: "codeflow filter src/", desc: "Analyze specific directory", tag: "analysis" },
  { cmd: "codeflow risk-score src/", desc: "Calculate risk score", tag: "analysis" },
];

const tagColors: Record<string, string> = {
  setup: "bg-primary/15 text-primary",
  analysis: "bg-blue-500/15 text-blue-400",
  security: "bg-red-500/15 text-red-400",
};

const CommandsSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            All <span className="text-gradient">Commands</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Simple, powerful CLI commands to master your codebase.
          </p>
        </motion.div>

        <div className="glass-strong rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">command reference</span>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {commands.map((item, i) => (
              <motion.div
                key={item.cmd}
                className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center gap-4">
                  <code className="text-sm font-mono text-foreground">{item.cmd}</code>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagColors[item.tag]}`}>
                    {item.tag}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground hidden sm:block">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;
