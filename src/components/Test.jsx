import { memo } from "react";

let Test = ({ data, print }) => {
  console.log(data);
  print();
};

export default memo(Test);
