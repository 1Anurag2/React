
// export const Learnprops = (props) => {
//   return (
//     <div>
//       <h1>Learn Props Here</h1>
      
//       <h1>{props.name}</h1>
//       <h1>{props.Roll}</h1>

//     </div>
//   )
// }


// eslint-disable-next-line react/prop-types
export const Learnprops = ({name , Roll}) => {
    return (
        <div>
            <h1>Learn Props Here</h1>

            <h1>{name}</h1>
            <h1>{Roll}</h1>

        </div>
    );
}


