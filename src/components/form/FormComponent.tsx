'use client';

import { useRouter } from 'next/navigation';

const Form = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: string;
}) => {
  const router = useRouter();
  return (
    <form
      action={action}
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          redirect: 'manual',
        });

        if (response.status === 0) {
          // redirected
          // when using `redirect: "manual"`, response status 0 is returned
          return router.refresh();
        } else {
          const js = await response.json();
          console.log(js);
        }
      }}
    >
      {children}
    </form>
  );
};

export default Form;

export interface ActionResult {
  error: string | null;
};