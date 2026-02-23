
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type PasswordInputProps = React.ComponentPropsWithoutRef<'input'>;

export default function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={showPassword ? 'text' : 'password'}
        className="w-full px-4 py-3 pr-10 border border-card-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary hover:text-text-primary"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
