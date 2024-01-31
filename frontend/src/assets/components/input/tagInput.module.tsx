import React, { useState } from "react"; 
import { TagsInput } from "react-tag-input-component";  
import TextField from '@mui/material/TextField';

export default function TagInput(props:any) {
    const [tag, setTag] = useState([]); 
    return (
         <TagsInput
          {...props}
          value={tag} 
          onChange={setTag}
          placeHolder="Tags"
          autofocus
        />
    );
}