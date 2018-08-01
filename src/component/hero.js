import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const hero = (props) => {
  return (
    <div>
      <Jumbotron className="text-center text-white mb-0 rounded-0">
        <h1 className="display-3">Belajar Jadi Asyik!</h1>
        <p className="lead text-capitalize">Kegiatan belajar intensif programming dan qur'an bersama santren koding.</p>
        <Button color="success" className="btn-lg mt-4">Mulai Belajar</Button>{' '}
      </Jumbotron>
    </div>
  );
};

export default hero;