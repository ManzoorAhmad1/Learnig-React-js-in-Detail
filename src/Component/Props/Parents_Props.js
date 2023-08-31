import { Fragment } from 'react';
import ReactProps from './child_Props';

function ParentProps() {
    const heading = "this is a demo props Heading";
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis pariatur magni debitis. Laborum amet, dolores harum minus laudantium perspiciatis fugit, fugiat sint iusto cum nostrum, atque iste molestiae commodi hic."
    const props = { heading, description }

    return (
        <Fragment>
            <ReactProps {...props} />
            {/* <ReactProps heading={heading} description={description} /> */}
        </Fragment>
    );
}

export default ParentProps;