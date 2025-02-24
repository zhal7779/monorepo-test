import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

/**
 * Button 컴포넌트
 * @param props ButtonProps
 */
export declare const Button: (props: ButtonProps) => JSX.Element;

export interface CardProps {
  title: string;
  children: ReactNode;
  href: string;
}

/**
 * Card 컴포넌트
 * @param props CardProps
 */
export declare const Card: (props: CardProps) => JSX.Element;

export interface CodeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Code 컴포넌트
 * @param props CodeProps
 */
export declare const Code: (props: CodeProps) => JSX.Element;
