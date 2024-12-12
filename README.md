dbname: u147070889_blogubisse
username: u147070889_jayubisse
password: Nazyr2000

const modules = {
toolbar: [
[{ 'header': [1, 2, false] }],
['bold', 'italic', 'underline', 'strike', 'blockquote'],
[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
['link', 'image'],
['clean']
],
}

const formats = [
'header',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image'
]
export function TextEditor() {
const [value, setValue] = useState('');

    return <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}
        formats={formats} />;

}
