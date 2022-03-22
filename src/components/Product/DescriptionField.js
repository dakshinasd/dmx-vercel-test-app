import { useState } from 'react';

const DescriptionField = ({ description }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      {showAll ? (
        <div>{description}</div>
      ) : (
        <div>
          <div className="text-sm">
            {description.substring(0, 50)}...{' '}
            <button
              clasName="text-blue-500 text-underline"
              onClick={() => setShowAll(!showAll)}
            >
              Read All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionField;
