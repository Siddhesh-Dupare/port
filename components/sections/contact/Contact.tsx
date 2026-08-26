"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  message: z.string(),
});

export default function Contact() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onChange"
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="bg-transparent text-primary-foreground">
      <CardHeader>
        <CardTitle className="uppercase font-semibold text-4xl">
          Contact Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* NOTE: First Name field */}
            <Field orientation="horizontal">
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-firstName">
                      First Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-firstName"
                      aria-invalid={fieldState.invalid}
                      placeholder="First Name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}

                  </Field>
                )} />
              {/* NOTE: Last Name field */}
              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-lastName">
                      Last Name
                    </FieldLabel>
                    <Input {...field}
                      id="contact-form-lastName"
                      aria-invalid={fieldState.invalid}
                      placeholder="Last Name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>
            {/* NOTE: Email field */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-email">
                    Email
                  </FieldLabel>
                  <Input {...field}
                    id="contact-form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Email"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* NOTE: Message field */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-message">
                    Message
                  </FieldLabel>
                  <Input {...field}
                    id="contact-form-message"
                    aria-invalid={fieldState.invalid}
                    placeholder="Write a message..."
                    autoComplete="off"
                    className="min-h-30 resize-y align-baseline"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline"
            onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" variant="outline" form="contact-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
