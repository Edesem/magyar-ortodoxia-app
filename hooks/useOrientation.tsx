import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const getOrientation = () => {
    const { width, height } = Dimensions.get("window");
    return width > height ? "landscape" : "portrait";
  };

  export default function useOrientation() {
    const [orientation, setOrientation] = useState(getOrientation());

    useEffect(() => {
        Dimensions.addEventListener("change", () => {
          setOrientation(getOrientation());
          console.log(orientation);
        });
      });

      return orientation;
  }