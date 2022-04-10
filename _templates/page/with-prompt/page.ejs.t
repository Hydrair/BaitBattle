---
to: src/pages/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';
import './<%= h.changeCase.camelCase(name) %>.scss';
import {View} from "../..";
export interface <%= h.changeCase.pascalCase(name) %>Props {}

export function <%= h.changeCase.pascalCase(name) %>(props: <%= h.changeCase.pascalCase(name) %>Props): JSX.Element {
    return(
      <View>

      </View>
    );
}