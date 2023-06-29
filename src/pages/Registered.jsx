import Button from "../components/Button";

export default function Registered() {
    return <main>
        <h1>Form submitted</h1>
        <p>
            <Button isLink={true} linkTo={'/'} content={'Back to page'} className={'primary'} />
        </p>
    </main>
}