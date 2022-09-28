import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Good book in regards to thinking in a mathematical away about ML & AI.',
      rating: 8,
    },
    {
      id: 2,
      text: 'This book covers the basics of discrete mathematics which opens avenues to broader computing projects.',
      rating: 9,
    },
    {
      id: 3,
      text: 'Very disappointed, this book do not gave me a good insight and introduction into data structures, algorithms and graph theory. ',
      rating: 3,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //Delete feedback
  function deleteFeedback(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }

  //Add feedback
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  //Update feedback
  function updateFeedback(id, updItem) {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updItem } : item;
      })
    );

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  }

  //set item to be updated
  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        // feedback : feedback,      ----> same as below
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
