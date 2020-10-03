import React, { useContext } from "react";
import { Item, Button, Label, Segment, Icon } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { Link } from "react-router-dom";
import { IActivity } from "../../../app/models/activity";

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const activityStore = useContext(ActivityStore);
  const { deleteActivity, submitting, target } = activityStore;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Extra>
                <Item.Header as="a">{activity.title}</Item.Header>
                <Item.Description>Hosted by Bob</Item.Description>
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" />
        {activity.date}
        <Icon name="marker" />
        {activity.venue},{activity.city}
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          content="view"
          color="blue"
        />

        <Button
          name={activity.id}
          loading={target === activity.id && submitting}
          onClick={(e) => deleteActivity(e, activity.id)}
          floated="right"
          content="Delete"
          color="red"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
