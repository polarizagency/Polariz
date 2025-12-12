import React from 'react';
import clsx from 'clsx';
export function Button({ children, variant = 'primary', disabled = false }) {
const base = 'px-6 py-2 font-medium transition-colors duration-200';
const variants = {
primary: 'bg-noirpolariz text-headers hover:bg-noirpolariz-foreground',
secondary: 'bg-white text-noirpolariz hover:bg-headers-foreground',
third: 'bg-headers text-noirpolariz hover:bg-headers-foreground',

};
return (
<button
disabled={disabled}
className={clsx(base, variants[variant], disabled && 'opacity-50 cursor-not-allowed')}
>
{children}
</button>
);
}


    export default Button;