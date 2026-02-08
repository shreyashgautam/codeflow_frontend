import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CodeBlock = ({ code, label }: { code: string; label?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass rounded-xl overflow-hidden group">
      {label && (
        <div className="px-4 py-2 border-b border-white/[0.06] flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">{label}</span>
          <button
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}
      <pre className="p-4 text-sm font-mono text-foreground/90 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const steps = [
  {
    number: "01",
    title: "Check Prerequisites",
    description: "Make sure you have Python 3.11+ and Git installed.",
    code: `python3 --version   # Must be 3.11+
git --version
pip3 --version`,
  },
  {
    number: "02",
    title: "Clone the Repository",
    description: "Get CodeFlow from GitHub.",
    code: `git clone https://github.com/shreyashgautam/Codeflow.git
cd Codeflow`,
  },
  {
    number: "03",
    title: "Install CodeFlow",
    description: "Install in editable mode for easy updates.",
    code: `pip3 install -e .
codeflow --version   # Should show 2.0.0`,
  },
  {
    number: "04",
    title: "Initialize & Analyze",
    description: "Navigate to any Git repo and start analyzing.",
    code: `cd ~/projects/your-app
codeflow init
codeflow hotspots
codeflow security`,
  },
];

const InstallationSection = () => {
  return (
    <section id="installation" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Get Started in <span className="text-gradient">4 Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From zero to analyzing your codebase in under 2 minutes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex-shrink-0 pt-1">
                <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-primary font-mono font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <CodeBlock code={step.code} label="bash" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
