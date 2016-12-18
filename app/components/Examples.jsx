var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Try out some locations here</p>
      <ol>
        <li>
          <Link to='/?location=Kolar Gold Fields'>Kolar Gold Fields, KA, India</Link>
        </li>
        <li>
          <Link to='/?location=Kolar Gold Fields'>San Francisco, CA</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
