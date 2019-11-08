import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap'


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Button color="warning"><Link to="/">Home</Link></Button>
      <Button color="success"><Link to="/character">Characters</Link></Button>

    </header>
  );
}
