import { motion } from "framer-motion";
import { Flame, Shield, GitBranch, Activity, Lock, Eye } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Hotspot Detection",
    description: "Identify frequently modified files that are most likely to introduce bugs.",
    color: "text-orange-400",
  },
  {
    icon: Activity,
    title: "Churn Analysis",
    description: "Track code changes over time with detailed metrics and risk scoring.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Secret Detection",
    description: "Find API keys, passwords, AWS credentials, and JWT tokens in your code.",
    color: "text-red-400",
  },
  {
    icon: Lock,
    title: "Pre-commit Checks",
    description: "Prevent secret leaks before they ever reach your repository.",
    color: "text-accent",
  },
  {
    icon: GitBranch,
    title: "Change History",
    description: "View detailed file modification history with author and line-change info.",
    color: "text-blue-400",
  },
  {
    icon: Eye,
    title: "Smart Filtering",
    description: "Analyze specific directories, auto-exclude node_modules and build files.",
    color: "text-emerald-400",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Powerful</span> Features
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to understand your codebase and keep it secure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <feature.icon className={`w-8 h-8 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
