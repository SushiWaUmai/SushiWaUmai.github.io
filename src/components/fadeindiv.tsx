import { motion } from "framer-motion";

interface FadeInDivProps {}

const FadeInDiv: React.FC<FadeInDivProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;
