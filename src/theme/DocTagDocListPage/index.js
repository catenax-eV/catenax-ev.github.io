import React from "react";
import styles from "./styles.module.css";

export default function DocTagDocListPage(props) {
    const { tag, permalink, allTagsPath, count, items } = props

    // return JSON.stringify(props);
    // return <DocTagsListComponent {...props} />;
    // JSON.stringify(tag)

    return (
        <main class="container margin-vert--lg">
            <h1>Documents tagged with: "{tag.label}"</h1>
            <p>{tag.count} documents found</p>

        {
            tag.items.map((item, index) => {
                return (
                    <article class={styles.result}>
                        <a href={item.permalink}><h2>{item.title}</h2></a>
                        <p class={styles.resDescription}>{item.description}</p>
                    </article>
                )
            })
        }
        </main>
    );

}
