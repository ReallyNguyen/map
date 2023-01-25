import styles from "./Card.module.css";
export default function Card({
    name = "none"
}) {
    return (
        <div>{name}</div>
    );
}