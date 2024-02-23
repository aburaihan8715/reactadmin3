// import Single from '../../components/single/Single';
// import './user.scss';

// const User = () => {
//   return (
//     <div>
//       <Single />
//     </div>
//   );
// };

// export default User;

import Single from '../../components/single/Single';
import { singleUser } from '../../data';
import './user.scss';

const User = () => {
  //Fetch data and send to Single Component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
