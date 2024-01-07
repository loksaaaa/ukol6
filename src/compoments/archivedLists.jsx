
import { Card, List, Button, Input } from "antd";

function ArchiveList(props) {



    const unArchiveList = (id) => {
        props.unArchiveList(id)
    };


    return (
        <div>
            <List
                bordered
                className="ArchivedList"
                header={<div> Archived Shopping Lists</div>}
                dataSource={props.list.filter((item) => !item.isDone)}
                renderItem={(item) => (
                    <List.Item>
                        {/* {item.listName}  */}
                        {!item.isDone ? <div>{item.listName}</div> : <div></div>}
                        <Button
                            onClick={() => {
                                unArchiveList(item._id);
                            }}
                        >
                            Unarchive
                        </Button>
                    </List.Item>
                )}
            ></List>

        </div>
    )
}

export default ArchiveList;