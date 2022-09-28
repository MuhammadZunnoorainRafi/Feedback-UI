import React from 'react';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from './Context/FeedbackContext';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //! WITHOUT animation

  // return feedback.map((item) => (
  //   <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  // ));
}

export default FeedbackList;
