"use client";
import React, { useActionState, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "../ui/button";
import { z } from "zod";

import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";

type TranslationSection = {
  title: string;
  description: string;
};

type LabelTranslations = {
  title: string;
  description: string;
  category: string;
  link: string;
  pitch: string;
};

type PlaceholderTranslations = LabelTranslations;

type ButtonTranslations = {
  submit: string;
  submitting: string;
};

type TranslationStructure = {
  label: LabelTranslations;
  placeholder: PlaceholderTranslations;
  button: ButtonTranslations;
  success: TranslationSection;
  validationError: TranslationSection;
  unexpectedError: TranslationSection;
};

type Translations = {
  en: TranslationStructure;
  ar: TranslationStructure;
};

// ✅ Assign Type to Your Translation Object
const translation: Translations = {
  en: {
    label: {
      title: "Title",
      description: "Description",
      category: "Category",
      link: "Image URL",
      pitch: "Pitch",
    },
    placeholder: {
      title: "Startup Title",
      description: "Startup Description",
      category: "Startup Category (Tech, Health, Education...)",
      link: "Startup Image URL",
      pitch: "Briefly describe your idea and what problem it solves",
    },
    button: {
      submit: "Submit Your Pitch",
      submitting: "Submitting...",
    },
    success: {
      title: "Success",
      description: "Your startup pitch has been created successfully",
    },
    validationError: {
      title: "Validation Error",
      description: "Please check your inputs and try again",
    },
    unexpectedError: {
      title: "Unexpected Error",
      description: "An unexpected error has occurred",
    },
  },
  ar: {
    label: {
      title: "العنوان",
      description: "الوصف",
      category: "الفئة",
      link: "رابط الصورة",
      pitch: "الملخص",
    },
    placeholder: {
      title: "عنوان الشركة الناشئة",
      description: "وصف الشركة الناشئة",
      category: "فئة الشركة الناشئة (تكنولوجيا, صحة, تعليم...)",
      link: "رابط صورة الشركة الناشئة",
      pitch: "صف فكرتك باختصار والمشكلة التي تحلها",
    },
    button: {
      submit: "تقديم الملخص",
      submitting: "جاري التقديم...",
    },
    success: {
      title: "تم بنجاح",
      description: "تم إنشاء ملخص شركتك الناشئة بنجاح",
    },
    validationError: {
      title: "خطأ في التحقق",
      description: "يرجى مراجعة المدخلات والمحاولة مرة أخرى",
    },
    unexpectedError: {
      title: "خطأ غير متوقع",
      description: "حدث خطأ غير متوقع",
    },
  },
};

const StartupForm = ({ lang }: { lang: "ar" | "en" }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const router = useRouter();

  const t = translation[lang]; // Make sure lang is passed as a prop

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);
      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast.success(
          <div className="flex flex-col gap-1">
            <span className="font-medium">{t.success.title}</span>
            <span className="text-muted-foreground text-sm">
              {t.success.description}
            </span>
          </div>,
          {
            duration: 3000,
            position: "top-center",
          }
        );
        router.push(`/${lang}/startup/${result._id}`);
      }
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error?.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);

        toast.error(
          <div className="flex flex-col gap-1">
            <span className="font-medium">{t.validationError.title}</span>
            <span className="text-muted-foreground text-sm">
              {t.validationError.description}
            </span>
          </div>,
          {
            duration: 3000,
            position: "top-center",
          }
        );

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast.error(
        <div className="flex flex-col gap-1">
          <span className="font-medium">{t.unexpectedError.title}</span>
          <span className="text-muted-foreground text-sm">
            {t.unexpectedError.description}
          </span>
        </div>,
        {
          duration: 5000,
          position: "top-center",
        }
      );

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    } finally {
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  console.log(state);

  return (
    <>
      <form action={formAction} className="startup-form">
        <div>
          <label htmlFor="title" className="startup-form_label">
            {t.label.title}
          </label>
          <Input
            id="title"
            name="title"
            className="startup-form_input"
            required
            placeholder={t.placeholder.title}
          />
          {errors?.title && (
            <p className="startup-form_error">{errors.title}</p>
          )}
        </div>
        <div>
          <label htmlFor="description" className="startup-form_label">
            {t.label.description}
          </label>
          <Textarea
            id="description"
            name="description"
            className="startup-form_textarea"
            required
            placeholder={t.placeholder.description}
          />
          {errors?.description && (
            <p className="startup-form_error">{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="startup-form_label">
            {t.label.category}
          </label>
          <Input
            id="category"
            name="category"
            className="startup-form_input"
            required
            placeholder={t.placeholder.category}
          />

          {errors.category && (
            <p className="startup-form_error">{errors.category}</p>
          )}
        </div>

        <div>
          <label htmlFor="link" className="startup-form_label">
            {t.label.link}
          </label>
          <Input
            id="link"
            name="link"
            className="startup-form_input"
            required
            placeholder={t.placeholder.link}
          />

          {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>
        <div data-color-mode="light">
          <label htmlFor="pitch" className="startup-form_label">
            {t.label.pitch}
          </label>

          <MDEditor
            value={pitch}
            onChange={(value) => setPitch(value as string)}
            id="pitch"
            preview="edit"
            height={300}
            style={{ borderRadius: 20, overflow: "hidden" }}
            textareaProps={{
              placeholder:
                "Briefly describe your idea and what problem it solves",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />

          {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
        </div>

        <Button
          type="submit"
          className="startup-form_btn text-white"
          disabled={isPending}
        >
          {isPending ? t.button.submitting : t.button.submit}
          <Send className="size-6 ml-2" />
        </Button>
      </form>
    </>
  );
};

export default StartupForm;
