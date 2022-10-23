import React from "react";
import BirdCard from "./BirdCard";

class BirdCardContainer extends React.Component {
  render() {
    const { birdData, adoptHandler } = this.props;

    const birdCards = birdData.map((birdInfo) => {
      return (
        <BirdCard
          birdInfo={birdInfo}
          key={birdInfo.id}
          adoptHandler={adoptHandler}
        />
      );
    });

    return <div className="birdCardContainer">{birdCards}</div>;
  }
}

export default BirdCardContainer;
