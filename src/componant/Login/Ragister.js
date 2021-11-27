import React from 'react';
import { Link } from 'react-router-dom';

const Ragister = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" name="email" id="" /><br />
                <input type="password" name="password" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login"> Already Registered?</Link>
        </div>
    );
};

export default Ragister;