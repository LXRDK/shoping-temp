import { StarIcon } from "lucide-react";

const RatingComponent = ({ initialRating }: { initialRating: number }) => {
  function createRoundedArray(num: number) {
    // Round the number down and up
    const roundedDown = Math.floor(num);

    // Create an array of the size of the rounded-down number
    const arrayDown = Array.from(
      { length: roundedDown },
      (_, index) => index + 1
    );

    // Return both arrays (or just one if you prefer)
    return arrayDown;
  }

  // Example usage

  const result = createRoundedArray(initialRating);

  const toAdd = 5 - result.length;

  return (
    <div className="flex">
      {result.map((index) => (
        <StarIcon key={index} fill="yellow" />
      ))}
      {createRoundedArray(toAdd).map((index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
};

export default RatingComponent;
