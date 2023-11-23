function Objiter(props) {
    const { d } = props;
  
    const sd = d.map((o, i) => {
      return (
        <div key={i} >
          <ol>
            <li className="sk">Name: {o.name}</li>
            <li>
              Skill: {o.skills[0].name}, skills-type: {o.skills[0].name}
            </li>
            <li>
              Skill: {o.skills[1].name}, skills-type: {o.skills[1].name}
            </li>
          </ol>
        </div>
      );
    });
  
    return <div>{sd}</div>;
  }
  
  export default Objiter;
  