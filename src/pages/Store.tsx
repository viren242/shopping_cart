import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return <>
    <h1 className="display-5">Store</h1>
    <hr className="hr hr-blurry" />
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}