import React, { useState } from "react";

interface HabitListProps {}

export const HabitList: React.FC<HabitListProps> = () => {
  return (
    <div>
      <div>
        individual habit container
        <div>habit name</div>
        <div>habit horizontalchecklist</div>
        <>
          <input type="checkbox" />
          need to add a better coin sound than habitica, sensory needs to be on
          point <br />
          <input type="checkbox" />
          Also need built in battle timer, <br />
          <input type="checkbox" />
          Need core, Trivial, Easy, Med, Hard. <br />
          <input type="checkbox" />
          Need habit wishlist and habit consolidation/integration tool
          <br />
          <p>
            Need an aid in integrating wished habits into routines and tracking
            and researching your successes and failures. Need an ai aid that
            strengthens the user's ability to do the above by analyzing data and
            giving clear reports of data.
          </p>
          <p>
            Need an optional Ai to make it easy as possible to figure out how to
            optimize my habit routines, perhaps clear and easy as possible
            tracking of data so that it can help accurately make suggestions?
            Perhaps a physical camera that observes what you do throughout the
            day and catalogues it and gives you a full measurement of your day
            in data. This should help you optimize. Like having a life coach
            that also takes in your theories and insights and explores/tests
            them
          </p>
          <p>
            perhaps an ai to handle reasoning how to reward activities, the goal
            is easy automated tracking, easy automated reasoning of rewards Ai
            can handle tasks humans do, and do beyond humans, eg. tracking
            effects of reward towards key goals / identities and adjusting
            rewards and punishments apropriately, and able to be taken over by
            user for manual assignment. Tracked as manual by system. Perhaps
            respond to the way the user handles rewards / punishes?
          </p>
        </>
      </div>
    </div>
  );
};

export const CharCard = () => {
  const [XP, setXP] = useState(0);
  const changeXPByNum = (num) => {
    setXP(XP + num);
    console.log("XP changed", XP);
  };
  const numToIncrementby = 100;
  const incrementXP = () => changeXPByNum(numToIncrementby);
  const decrementXP = () => changeXPByNum(-numToIncrementby);
  const maxLevelExp = 1000;
  const levelNum = Math.floor(XP / maxLevelExp);
  const levelExp = XP % maxLevelExp;

  const handleDecrement = () => decrementXP();
  const handleIncrement = () => incrementXP();
  return (
    <>
      <div>This is Characard Title</div>
      <div> Character Image</div>
      <div>Level {levelNum}</div>
      <div>
        {levelExp}/{maxLevelExp} level XP
      </div>

      <div>
        <button onClick={handleDecrement}>-</button>
        <div>10 XP</div>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
};
