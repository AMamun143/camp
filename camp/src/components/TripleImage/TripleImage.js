import React from "react";

import backpackmanhome from "./backpackmanhome.png";
import tenthome from "./tenthome.jpg";
import sleepingbaghome from "./sleepingbaghome.jpg";
import styles from "./TripleImage.module.css";
import { Link } from "react-router-dom";

function TripleImageComponent() {
  return (
    
    <div className={styles.wrap}>
      <div className={styles.row}>
        <Link to="/shop">
          <div className={styles.column}>
            <div className={styles.imgWrap}>
              <img src={backpackmanhome} alt="backpack" />
              <div className={styles.centered}>Backpacks</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.imgWrap}>
              <img src={tenthome} alt="tent" />
              <div className={styles.centered}>Tents</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.imgWrap}>
              <img src={sleepingbaghome} alt="sleepingbag" />
              <div className={styles.centered}>Sleeping Bags</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    
  );
}

export default TripleImageComponent;
